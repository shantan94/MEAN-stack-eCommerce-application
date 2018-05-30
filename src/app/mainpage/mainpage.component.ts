import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  username='';
  count=0;
  constructor(private router:Router) { }

  ngOnInit() {
  	this.username=localStorage.getItem("username");
  }

  LogOut(){
  	localStorage.clear();
  	this.router.navigate(['/login']);
  }

}
