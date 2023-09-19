import { Routes } from "@angular/router";
import { AddPropertyComponent } from "./add-property/add-property.component";
import { AuthGuard } from "./auth-guard/auth.guard";
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
        path: 'addProperty', component: AddPropertyComponent, canActivate: [AuthGuard]
    },
    {
        path: 'properties-for-sale', component: PropertiesForSaleComponent
    },
    {
        path: 'view-property', component: ViewPropertyComponent
    },
    {
        path: 'delete-property', component: DeletePropertyComponent, canActivate: [AuthGuard]
    },
    {
        path: 'update-property', component: UpdatePropertyComponent, canActivate: [AuthGuard]
    },
    {
        path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard]
    },
    {
        path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'resetPassword', component: ResetPasswordComponent, canActivate: [AuthGuard]
    },
    {
        path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard]
    },
    { path : '', redirectTo:'/properties-for-sale', pathMatch : 'full'}
];