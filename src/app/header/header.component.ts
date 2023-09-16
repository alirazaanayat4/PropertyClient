import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { PropertyService } from '../shared/property.service';
import { theme } from '../shared/property/property.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public checkLogin:boolean;
  public myTheme:theme=new theme();
  storedTheme:any;
  public isCollapsed:boolean = true;

  constructor(private router:Router,
    public service:PropertyService,
    //public toastr:ToastrService
    ) {
      if(localStorage.getItem("theme") === null)
        this.setTheme("purple");
      else{
        this.storedTheme=localStorage.getItem("theme");
        this.setTheme(this.storedTheme);
      }
    }

  ngOnInit(): void {
      this.checkLogin=this.service.checkLogin;
  }

  Logout() {
    this.service.checkLogin=false;
    localStorage.removeItem('userToken');
    localStorage.removeItem("loginUserEmail");
    localStorage.removeItem("loginUserPhone")
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    // this.toastr.info("Successfully","Logout");
    this.router.navigate(['/properties-for-sale']);
  }
  setTheme(color:string){
    localStorage.setItem("theme",color);
    this.myTheme.theme = "theme-"+color+"-background";
    this.myTheme.button = "btn-"+color;
    this.myTheme.listItem = "list-item-"+color;
    this.myTheme.id = "theme-"+color;
    this.service.theme = this.myTheme;
  }
}
