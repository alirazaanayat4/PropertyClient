import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public service:PropertyService,
    private router:Router,
    //private toastr:ToastrService
    ) { }

  ngOnInit(): void {
  }

  OnSubmit(password:string,resetToken:string)
  {
    if(this.service.resetToken==resetToken)
    {
      this.service.resetPassword(password,this.service.resetPasswordEmail)
    .subscribe((data : any)=>{
      console.log("done");
      localStorage.removeItem("resetPasswordEmail");
      //this.toastr.success("Password Changed","Successfully");
      this.router.navigate(['/login']);
    },
    (err : any)=>{
      console.log(err);
    });
    }
    else
    {
      //this.toastr.error("Code is wrong","Wrong code");
    }
  }
}
