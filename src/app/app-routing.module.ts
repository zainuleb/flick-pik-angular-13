import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageModule } from './search-page/search-page.module';

//Routes for the App
const routes: Routes = [
  {
    path: 'd',
    loadChildren: () =>
      import('./search-page/search-page.module').then(
        (m) => m.SearchPageModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
