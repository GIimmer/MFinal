import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './product.service';

import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    ListComponent,
    DetailsComponent,
    NewComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
