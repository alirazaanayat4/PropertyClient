import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public password:boolean=false;
  constructor(public service:PropertyService,
    //private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
  }

  OnSubmit(oldPassword:string,newPassword:string){
    if(localStorage.getItem('password')===oldPassword)
    {
      this.service.changePassword(this.service.loginUserEmail, oldPassword, newPassword)
      .subscribe((data : any)=>{
        localStorage.setItem('password', newPassword);
        //this.toastr.success("Password Changed","Successfully")
        this.router.navigate(['/']);
      },
      (err : any)=>{
        this.password=true;
        //this.toastr.error("Not Changed","Password");
      });
    }
    else
    {
      this.password=true;
      //this.toastr.error("Not Changed","Password");
    }
  }
}
