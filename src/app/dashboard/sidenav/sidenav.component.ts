import { Component, OnInit } from '@angular/core';
import { information } from 'src/app/empinterface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data(){
    let company_information:information={
      name:"shailesh Kumar Chaudhary",
      rollNo:45,
      age:22,
      Address:"Gorakhpur",
      gmailId:"abc@gmail.com", 
      mobileNo:7413833024,

    }
    return company_information
  }

}
