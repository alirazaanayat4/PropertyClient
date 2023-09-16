import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public service:PropertyService,
    private router:Router) { }

  ngOnInit(): void {
  }

  OnSubmit(email:string)
  {
    this.service.forgotPassword(email)
    .subscribe((data : any)=>{
      console.log(data);
      this.service.resetToken=data;
      this.service.resetPasswordEmail=email;
      localStorage.setItem("resetPasswordEmail",email);
      this.router.navigate(['/resetPassword']);
    },
    (err : any)=>{
      console.log(err);
    });
  }
}
