import { Component } from '@angular/core';
import{information} from "./empinterface";
import { address } from './addressinterface';
interface combineinterface extends information ,address{

}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dashboard';
  sideBarOpen=true;
  sidebartoggler(){
    this.sideBarOpen=!this.sideBarOpen
  }
  getdata(){
   let employee:combineinterface={
   name:"shailesh Kumar Chaudhary",
   rollNo:45,
   age:22,
   Address:"Rampur",
   gmailId:"abc@gmail.com",
   mobileNo:8948251881,
   village:"Rampur",
   District:"SiddharthNagar",
   Pincode:272206,
    }
    return employee;
  }
}
