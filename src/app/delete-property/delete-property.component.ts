import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { PropertyService } from '../shared/property.service';
import { propertyForSale } from '../shared/property/property.module';

@Component({
  selector: 'app-delete-property',
  templateUrl: './delete-property.component.html',
  styleUrls: ['./delete-property.component.css']
})
export class DeletePropertyComponent implements OnInit {

  constructor(public service:PropertyService,
    //private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.getSpecificUserProperties();
  }

  getSpecificUserProperties(){
    this.service.getSpecificUserProperties().toPromise().then(
      res => {
        this.service.specificUserProperties = res as propertyForSale[];
      },
      err => {
        console.log(err);
      }
    )
  }
  delete(ID:number)
  {
    this.service.deleteProperty(ID).subscribe(
      res => {
        this.service.getPropertiesForSale();
        this.getSpecificUserProperties();
        //this.toastr.warning('Deleted Successfulyy','Deleted');
      },
      err => {
        //this.toastr.error('Error in Deletion','Error');
        console.log(err);
      }
    )
  }
}
