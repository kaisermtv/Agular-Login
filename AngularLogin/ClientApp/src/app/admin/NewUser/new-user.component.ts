import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  //model = new UserInfo("êg","fbs","sbsd");
  
  model = new UserInfo('','','','');

  submitted = false;
    http: any;
    baseUrl: string;

  
  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  this.http = http;
  //  this.baseUrl = baseUrl;
  //}

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    //this.http.post
  }

  newHero() {
    this.model = new UserInfo('', '', '','');
  }

  //onSubmit() {

  //  console.log(this.model);
  //}
  
}
export class UserInfo {

  constructor(
    public UserName: string,
    public Password: string,
    public RePassword: string,
    public Role: string,
  ) { }

}
