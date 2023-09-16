import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrService } from 'ngx-toastr';
import { PropertyService } from '../shared/property.service';
import { propertyForSale } from '../shared/property/property.module';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {

  updateProperty: propertyForSale

  constructor(public service:PropertyService,
    // private spinner:NgxSpinnerService,
    // private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    debugger;
    this.updateProperty = cloneDeep(this.service.viewProperty);
  }

  onSubmit()
  {
    //this.spinner.show();
    this.service.updateProperty(this.updateProperty).subscribe(
      res => {
        //this.spinner.hide();
        //this.toastr.success('Updated Successfully','Property Updated');
        this.router.navigate(['/properties-for-sale']);
      },
      err => {
        //this.spinner.hide();
        //this.toastr.error("Error","Property Not Added");
      }
    );
  }
  onChooseLocation(latitude: number, longitude: number) {
    this.service.viewProperty.latitude=latitude;
    this.service.viewProperty.longitude=longitude;
    console.log(this.service.viewProperty);
  }
}
