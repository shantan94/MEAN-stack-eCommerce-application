import { Component, OnInit } from "@angular/core";
import { Item } from "../services/item.model";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-itemupload",
  templateUrl: "./itemupload.component.html",
  styleUrls: ["./itemupload.component.css"]
})
export class ItemuploadComponent implements OnInit {
  item: Item;
  error: string;
  files: Blob;
  constructor(private newService: CommonService) {}

  ngOnInit() {
    this.item = {
      itemname: "",
      description: "",
      price: "",
      image: "",
      username: ""
    };
  }

  onChange = event => {
    this.files = event.target.files[0];
  };

  UploadItem = () => {
    let reader = new FileReader();
    reader.onload = () => {
      this.item.image = reader.result;
    };
    reader.onloadend = () => {
      this.newService.uploadFile(this.item).then(res => {
        this.error = JSON.parse(res.text()).message;
      });
    };
    reader.readAsDataURL(this.files);
  };
}
