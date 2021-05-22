import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { itemList } from './itemList/itemList.component';
import { DetailsComponent } from './details/details.component';
import { NewItemComponent } from './new-item/new-item.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: itemList },
  { path: 'new', component: NewItemComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
