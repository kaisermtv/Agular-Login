import { Component } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new UserInfo("","","");

  submitted = false;

  onSubmit() {
    this.submitted = true;

    console.log(this.model);
  }
  
}
export class UserInfo {

  constructor(
    public UserName: string,
    public Password: string,
    public RePassword: string,
  ) { }

}
