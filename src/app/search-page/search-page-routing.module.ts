import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './search-page.component';

//Routes for the Search Page
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SearchPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class SearchPageRoutingModule {}
