import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ApiService } from '../../../services/api.service';
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
              this._router.navigate(['']);
          }
        });
      } catch (err) {
        // console.log(error);

        // this.errorMessage = error.message;
      }
      // if (res.status) { 
      //   this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
      //   } else { 

      // }
      // }, err => {
      //   this.errorMessage = err['error'].message;
      // });
    }
  }

  isUserLogin() {
    console.log(this._auth.getUserDetails())
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }

  logout(){
    this._auth.clearStorage()
    this._router.navigate(['']);
  }

}
