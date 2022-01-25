import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  
  _user = {};
  constructor() { }

  ngOnInit(): void {
  }

  getUser(){
    this._user ={"name":"Agus Firman"};
  }

}
