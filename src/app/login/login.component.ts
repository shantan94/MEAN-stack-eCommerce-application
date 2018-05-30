import { Component, OnInit } from '@angular/core';
import { Login } from '../services/login.model';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login;
  error:'';
  constructor(private newService:CommonService,private router:Router) { }

  ngOnInit() {
  	this.login={
  		username:'',
  		password:''
  	}
  }

  Authenticate(){
  	this.newService.authenticateUser(this.login).then(res=>{
  		this.error=JSON.parse(res.text()).message;
  		if(this.error!=='No such username or password'.toString()){
	  		var token=JSON.parse(JSON.stringify(res.headers))['x-jwt-token'][0];
	  		var username=JSON.parse(JSON.stringify(res.headers))['username'][0];
	  		localStorage.setItem("username",username);
	  		localStorage.setItem("token",token);
	  		this.router.navigate(['/main']);
  		}
  	});
  }

}
