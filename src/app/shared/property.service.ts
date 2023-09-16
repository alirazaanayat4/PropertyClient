import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AllImages, imageModel, perPropertyImages, propertyForSale, theme, User } from './property/property.module';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public propertyUrl:string="https://localhost:7104/api/property";
  public userUrl:string="https://localhost:7104/api/User";
  public PropertyGetData: propertyForSale[];
  public perPropertyImageGetData:imageModel[];
  public propertiesForSaleList:propertyForSale[] = [];
  public viewProperty:propertyForSale;
  public viewPropertyImages:imageModel[];
  public imagesToUpload:string[];
  public imagesName:string[];
  public checkLogin:boolean=false;
  public loginUserEmail:any = localStorage.getItem('loginUserEmail');
  public loginUserPhone:any = localStorage.getItem('loginUserPhone');
  public theme:theme;
  public specificUserProperties:propertyForSale[];
  public resetToken:string;
  public resetPasswordEmail:any = localStorage.getItem('resetPasswordEmail');
  
  constructor(private http:HttpClient) { 
    this.getPropertiesForSale();
  }

  public getPropertiesForSale()
  {
    if (localStorage.getItem('userToken') != null)
      this.checkLogin=true;
    this.http.get<propertyForSale[]>(this.propertyUrl).subscribe(
      res => {
        debugger;
        this.PropertyGetData = res;
        this.propertiesForSaleList = [];
        for (let i = 0; i < this.PropertyGetData.length; i++)
        {
          this.propertiesForSaleList[i]=(this.PropertyGetData[i]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  getAProperty(ID:number)
  {
    return this.http.get(this.propertyUrl+'/'+ID, this.getHeaders());
  }
  getSpecificUserProperties()
  {
    return this.http.get(this.propertyUrl+"/GetSpecificUserProperties?email="+this.loginUserEmail,{headers: new HttpHeaders(
      {'Authorization': 'Bearer '+localStorage.getItem('userToken')})});
  }
  public addProperty(propertyForSale: propertyForSale)
  {
    return this.http.post(this.propertyUrl, propertyForSale, this.getHeaders());
  }
  public updateProperty(updateProperty: propertyForSale)
  {
    return this.http.put(this.propertyUrl,updateProperty);
  }
  deleteProperty(ID:number)
  {
    return this.http.delete(this.propertyUrl+"/"+ID, this.getHeaders());
  }
  registerUser(fullname:string,email:string,phone:string,password:string){
    const body: User = {
      name:fullname,
      email:email,
      password:password,
      phone:phone
    }
    console.log(body.phone);
    return this.http.post(this.userUrl + '/RegisterUser', body);
  }
  login(email:string,password:string)
  {
    return this.http.get(this.userUrl + "/Login?email="+email+"&password="+password, this.getHeaders());
  }
  email(email:string,phone:string,text:string,emailTo:string)
  {
    const forData : FormData = new FormData();
    forData.append("buyerMail",email);
    forData.append("phoneNo",phone);
    forData.append("body",text);
    forData.append("email",emailTo);
    return this.http.post(this.propertyUrl+"/email",forData);
  }
  whatsapp(phone:string,text:string,toPhone:string)
  {
    const forData : FormData = new FormData();
    forData.append("phoneNo",phone);
    forData.append("toPhoneNo",toPhone);
    forData.append("body",text);
    return this.http.post(this.propertyUrl+"/whatsapp",forData);
  }
  forgotPassword(email:string)
  {
    return this.http.post(this.userUrl + '/ForgotPassword',{ Email: email});
  }
  resetPassword(password:string,email:string)
  {
    const forData : FormData = new FormData();
    forData.append("email",email);
    forData.append("password",password);
    return this.http.post(this.userUrl+'/ResetPassword',forData);
  }
  changePassword(email:string, oldPassword:string, newPassword: string)
  {
    return this.http.post(this.userUrl+'/ChangePassword',{ Email: email, OldPassword: oldPassword, NewPassword: newPassword }, this.getHeaders());
  }
  private getHeaders(){
    return {headers: new HttpHeaders(
      {'Authorization': 'Bearer '+localStorage.getItem('userToken')})}
  }
}
