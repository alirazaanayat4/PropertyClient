export class propertyForSale
{
  public ID:number;
  public location:string;
  public title:string;
  public area:string;
  public description:string;
  public ownerEmail :string;
  public price:number;
  public phone:string;
  public longitude:number;
  public latitude:number;
}
export class imageModel{
  Name:string;
  Data:any[];
}
export class perPropertyImages
{
  public imageModel:imageModel[];
}
export class AllImages
{
  imagesCollection:imageModel[];
  propertyForSale:propertyForSale;
}
export class User
{
  public name:string;
  public email:string;
  public password:string;
  public phone:string;
}
export class UserWithToken extends User
{
  public token: string;
}
export class theme 
{
  public listItem:string;
  public button:string;
  public theme:string;
  public id:string;
}