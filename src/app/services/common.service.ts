import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

var ConfigUrl = "http://localhost:5000";

@Injectable()
export class CommonService {
  constructor(private http: Http) {}

  saveUser(user) {
    return this.http.post(ConfigUrl + "/user/register", user).toPromise();
  }

  authenticateUser(login) {
    return this.http.post(ConfigUrl + "/user/authenticate", login).toPromise();
  }

  uploadFile(item) {
    return this.http.post(ConfigUrl + "/user/upload", item).toPromise();
  }

  getItems() {
    return this.http.post(ConfigUrl + "/user/getitems", {}).toPromise();
  }
}
