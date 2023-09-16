import { Routes } from "@angular/router";
import { AddPropertyComponent } from "./add-property/add-property.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { DeletePropertyComponent } from "./delete-property/delete-property.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";
import { PropertiesForSaleComponent } from "./properties-for-sale/properties-for-sale.component";
import { RegisterComponent } from "./register/register.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";
import { UpdatePropertyComponent } from "./update-property/update-property.component";
import { ViewPropertyComponent } from "./view-property/view-property.component";

export const appRoutes: Routes = [
    {
        path: 'addProperty', component: AddPropertyComponent
    },
    {
        path: 'properties-for-sale', component: PropertiesForSaleComponent
    },
    {
        path: 'view-property', component: ViewPropertyComponent
    },
    {
        path: 'delete-property', component: DeletePropertyComponent,
    },
    {
        path: 'update-property', component: UpdatePropertyComponent,
    },
    {
        path: 'change-password', component: ChangePasswordComponent
    },
    {
        path: 'update-profile', component: UpdateProfileComponent,
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'resetPassword', component: ResetPasswordComponent
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent
    },
    { path : '', redirectTo:'/properties-for-sale', pathMatch : 'full'}
];