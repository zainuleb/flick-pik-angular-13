import {
  Component,
  OnInit,
  Input,Output, EventEmitter,
} from '@angular/core';
import { Photo } from '../api/interfaces/photos.interface';
@Component({
  selector: 'app-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent implements OnInit {
  @Input() currentPhoto: Photo | undefined;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }
  close(): void {
    this.closeModal.emit(true);
  }
}
