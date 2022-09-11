import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {distinctUntilChanged, Subject, takeUntil} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { SearchPageService } from '../api/services/search-page.service';
import { Photo, Photos } from '../api/interfaces/photos.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  search = new FormControl('');
  data: Photos | undefined;
  currentPhoto: Photo | undefined;
  loading: boolean = false;

  //For unbsubscribe from all observables
  private readonly unsubscribe$: Subject<void> = new Subject();

  constructor(
    private searchService: SearchPageService,
  ) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(500),
      distinctUntilChanged())
      .subscribe((value: string) => {
        if (value) {
          this.loading = true;
          this.searchService
            .getPhotos(value)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((data) => {
              this.data = data.photos;
              this.loading = false;
            });
        }
      });
  }

  openModal(photo: Photo) {
    this.currentPhoto = photo;
  }
  closeModal(event: boolean): void {
    this.currentPhoto = undefined;
  }
  reset() {
    this.data = undefined;
    this.search.setValue('');
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
