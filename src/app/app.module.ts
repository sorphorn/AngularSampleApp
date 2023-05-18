import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { SetBackgroundDirective } from './customAttributeDirective/setbackground.directive';
import { MarginWidthDirective } from './customAttributeDirective/margin-width.directive';
import { AlertMessageService } from './services/alert-message.service';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductComponent,
    SetBackgroundDirective,
    MarginWidthDirective,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlertMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
