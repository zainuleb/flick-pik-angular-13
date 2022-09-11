import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SearchPageComponent} from "./search-page.component";
import {CustomModalComponent} from "../custom-modal/custom-modal.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [SearchPageComponent, CustomModalComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class SearchPageModule {}
