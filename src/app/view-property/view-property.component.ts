import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/property.service';
//import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  constructor(public service:PropertyService,
    public router:Router,
    //private modalService: BsModalService,
    //private toastr:ToastrService
    ) {
      this.service.getPropertiesForSale();
     }

  ngOnInit(): void {
  }

  //modalRef: BsModalRef=new BsModalRef();  
  public EmailClicked:boolean=false;
  emailClick(email:string,phone:string,text:string)
  {
    //this.modalRef.hide();
    this.EmailClicked=true;
    this.service.email(email,phone,text,this.service.viewProperty.ownerEmail).subscribe(
      res => {
        //this.toastr.success('Email Sent Successfully','Email Sent');
      },
      err => {
        console.log(err);
        //this.toastr.error("Enter Email and Phone","Email Not Sent");
      }
    );
  }
  whatsappClick(phone:string,text:string)
  {
    //this.modalRef.hide();
    this.service.whatsapp(phone,text,this.service.viewProperty.phone).subscribe(
      res => {
        //this.toastr.success('Message Sent Successfully','Whatsapp Sent');
      },
      err => {
        console.log(err);
        //this.toastr.error("Enter Phone Number","Whatsapp Not Sent");
      }
    );
  }
  openModalWithClass(template: TemplateRef<any>) { 
        //this.modalRef = this.modalService.show(  
        //       template,
        //       Object.assign({}, { class: 'gray modal-sm' })  
    
        // );  
      }

  homeSlider = {items:1,
    dots:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true};
}
