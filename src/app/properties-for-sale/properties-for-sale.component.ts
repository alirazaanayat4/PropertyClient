import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { PropertyService } from '../shared/property.service';
import { AllImages, imageModel, propertyForSale } from '../shared/property/property.module';

@Component({
  selector: 'app-properties-for-sale',
  templateUrl: './properties-for-sale.component.html',
  styleUrls: ['./properties-for-sale.component.css']
})
export class PropertiesForSaleComponent implements OnInit {

  public imageUrl:string="../assets/unnamed.jpg";
  public flagDelete:boolean=false;

  constructor(public service:PropertyService,
    private router:Router,
    //private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    debugger;
    this.getPropertiesForSale();
  }
  getPropertiesForSale()
  {
    this.service.getPropertiesForSale();
  }
  View(ID:number)//property:propertyForSale,propertyImages:imageModel[]
  {
    if(!this.flagDelete){
    this.service.getAProperty(ID).subscribe(
      res => {
        var response = res as propertyForSale;
        this.service.viewProperty = res as propertyForSale;
        //this.service.viewPropertyImages = response.imagesCollection;
        this.router.navigate(["/view-property"]);
      },
      err => {
        console.log(err);
      }
    )
    }
    else{
      this.flagDelete=false;
    }
  }
  delete(ID:number)
  {
    debugger;
    this.flagDelete=true;
    this.service.deleteProperty(ID).subscribe(
      res => {
        //this.toastr.warning('Deleted Successfulyy','Deleted');
        //this.ngOnInit();
        this.getPropertiesForSale();
        this.router.navigate(["/properties-for-sale"]);
      },
      err => {
        //this.toastr.error('Error in Deletion','Error');
        console.log(err);
      }
    )
  }
  update(ID:number)//property:propertyForSale,propertyImages:imageModel[]
  {
    debugger;
    if(!this.flagDelete){
    this.service.getAProperty(ID).subscribe(
      res => {
        this.service.viewProperty = res as propertyForSale;
        this.router.navigate(["/update-property"]);
      },
      err => {
        console.log(err);
      }
    )
    }
    else{
      this.flagDelete=false;
    }
  }
}
