import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { PropertyService } from '../shared/property.service';
import { filter, pairwise } from 'rxjs/operators';
//import { ToastrService } from 'ngx-toastr';
import { User, UserWithToken } from '../shared/property/property.module';
//import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError:boolean=false;
  constructor(public service:PropertyService,
    private router:Router,
    //private toastr:ToastrService,
    //private spinner:NgxSpinnerService
    ) { }

  ngOnInit(): void {
  }

  OnSubmit(email:string,password:string){
    //this.spinner.show();
    debugger;
    this.service.login(email,password).subscribe((response : UserWithToken)=>{
     localStorage.setItem('userToken',response.token);
     localStorage.setItem('loginUserEmail',email);
     localStorage.setItem('loginUserPhone',response.phone);
        localStorage.setItem('password',response.password);
        localStorage.setItem('name',response.name);
        this.service.checkLogin=true;
     this.service.loginUserEmail=email;
     this.router.navigate(['/properties-for-sale']);
    },
   (err : HttpErrorResponse)=>{
     //this.spinner.hide();
     this.isLoginError=true;
   });
  }
}
