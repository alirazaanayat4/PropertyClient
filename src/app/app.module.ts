import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { PropertiesForSaleComponent } from './properties-for-sale/properties-for-sale.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './Routes';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FormsModule } from '@angular/forms';
import { DeletePropertyComponent } from './delete-property/delete-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PropertiesForSaleComponent,
    AddPropertyComponent,
    DeletePropertyComponent,
    ViewPropertyComponent,
    UpdatePropertyComponent,
    RegisterComponent,
    LoginComponent,
    UpdateProfileComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation:"reload"}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
