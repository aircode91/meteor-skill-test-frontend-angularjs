import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  isLogin: boolean = false;
  errorMessage = "";


  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.isLogin);
    this.isUserLogin();
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    if (email == "" && password == "") {
      this.errorMessage = "Email dan password masih kosong";
      console.log('Email dan password masih kosong');
    } else {
      // {"email":email,"password":password}
      try {
        this._api.postTypeRequest('/login', form.value).subscribe((res: any) => {
          if (res) {
            console.log(res);
              this._auth.setDataInLocalStorage('token', res.accessToken);  
              this._router.navigate(['/profile']);
          }
        });
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

  isUserLogin() {
    if (this._auth.loggedIn()) {
      this.isLogin = true;
      this._router.navigate(['/profile']);
    }
  }

}
