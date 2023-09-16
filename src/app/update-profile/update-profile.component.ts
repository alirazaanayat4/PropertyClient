import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/property.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(public service:PropertyService) { }

  ngOnInit(): void {
  }
  public name:any=localStorage.getItem('name');
  public phoneNo:any=localStorage.getItem('loginUserPhone');
  OnSubmit()
  {
    console.log(this.name);
    console.log(this.phoneNo);
  }
}
