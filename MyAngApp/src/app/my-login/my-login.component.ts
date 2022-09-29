import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {
  
  compayName ="Dell";
  disabledBtn = false;
  loginNote ="Please enter Bank User Credentials";
  username ='';
  password ="";
  welcomeMsg = false;
  

  enableBtn() {

  }

  constructor(){
    setTimeout(()=> this.disabledBtn = false,2000)
  }

  ngOnInit() {
  }

  onSubmitClick (){
    if(this.username=="shashi"  && this.password=="123"){
      alert("successful login");
      this.welcomeMsg = true;
    } else {
      alert("Pleasae enter correct detail !!")
    }
   

  }
  onUpdateUsername(event : any){
    console.log(event)
   // this.username = event.target.value ;

  }

  getColor (){
    return this.welcomeMsg== true ? '#91a1ca' : '#ddddc2';

  }
  

}
