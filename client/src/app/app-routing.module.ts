import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/products" },

  {path: "products", component: ListComponent},
  {path: "products/new", component: NewComponent},
  {path: "products/:id", component: DetailsComponent},
  {path: "products/edit/:id", component: UpdateComponent},

  {path: "*", redirectTo: "/products" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
