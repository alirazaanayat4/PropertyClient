import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { PropertyService } from '../shared/property.service';
import { propertyForSale, User } from '../shared/property/property.module';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:User;
  constructor(public service:PropertyService,
    //public toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      name:"",
      email:"",
      password:"",
      phone:""
    }
  }

  OnSubmit(fullname:string,email:string,phone:string,password:string) {
    this.service.registerUser(fullname,email,phone,password)
      .subscribe(
        res => {
          //this.toastr.success('Successfully','Sign-Up');
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
        }
      );
  }
}