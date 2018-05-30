import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent implements OnInit {
  username = "";
  count = 0;
  itemdata: Array<String>;
  constructor(private router: Router, private newService: CommonService) {}

  ngOnInit() {
    this.username = localStorage.getItem("username");
    this.getItems();
  }

  LogOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  getItems = () => {
    this.newService.getItems().then(res => {
      this.itemdata = JSON.parse(res["_body"]).data;
    });
  };
}
