import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PropertyService } from '../shared/property.service';
import { propertyForSale } from '../shared/property/property.module';
//import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  images:any=[];
  imagesToUpload:any=[];
  imagesName:any=[];
  propertyForSale: propertyForSale = new propertyForSale();
  constructor(public service:PropertyService,
    //private toastr:ToastrService,
    private router:Router,
    //private spinner:NgxSpinnerService
    ) { }

  public lat:number=31.451002;
  public lng:number=74.353508;
  ngOnInit(): void {
  }

  onSubmit()
  {
    //this.spinner.show();
    debugger;
    this.propertyForSale.ownerEmail = this.service.loginUserEmail;
    this.propertyForSale.phone = this.service.loginUserPhone;
    this.service.addProperty(this.propertyForSale).subscribe(
      res => {
        //this.spinner.hide();
        //this.toastr.success('Submitted Successfully','Property Added');
        this.router.navigate(['/properties-for-sale']);
      },
      err => {
        //this.spinner.hide();
        //this.toastr.error("Error","Property Not Added");
      }
    );
  }
  onFileChange(event:any) {
    if (event.target.files && event.target.files[0]) {
      var selectedFiles = event.target.files;
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
    
                reader.onload = (event:any) => {
                   this.images.push(event.target.result);
                   this.imagesToUpload.push(selectedFiles[i]);
                   this.imagesName.push(selectedFiles[i].name);
                }
   
                reader.readAsDataURL(event.target.files[i]);
        }
    }
    this.service.imagesToUpload=this.imagesToUpload;
    this.service.imagesName=this.imagesName;
  }
  onChooseLocation(latitude: number, longitude: number) {
    this.lat=latitude;
    this.lng=longitude;
  }
}
