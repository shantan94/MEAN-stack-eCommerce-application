import { Component, OnInit } from '@angular/core';
import { User } from '../services/user.model';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  error:'';
  constructor(private newService:CommonService) { }

  ngOnInit() {
  	this.user={
  		username:'',
  		password:'',
  		email:'',
  		phone:'',
  		address:''
  	}
  }

  Register=function(){
  	this.newService.saveUser(this.user).then(res=>{
  		this.error=JSON.parse(res.text()).message;
  	});
  }

}
