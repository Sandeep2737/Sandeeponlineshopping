import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
 
  constructor(private router:Router) {
    this.loginForm=new FormGroup({
      mailid:new FormControl(null,[Validators.required,Validators.email]),
      password:new  FormControl(null,Validators.required)
    });
   }
   get UserName()
  {
    return this.loginForm.get('UserName')
  }

  get Password()
  {
    return this.loginForm.get('Password')
  }
 err;
   doLogin()
   {
     
    if(this.UserName.value=="Admin" && this.Password.value=="admin")
    {
         this.router.navigate(['admin']);
       
       //  localStorage.setItem('email',this.mailid.value)
       sessionStorage.setItem('User Name',this.UserName.value)
    }
      else if(this.UserName.value=="Sandy" && this.Password.value=="123")
       {
            this.router.navigate(['Home']);
          
            sessionStorage.setItem('User Name',this.UserName.value)
       }
       else
       {
         this.err="Invalid username or password!!";
       }
   }

  ngOnInit()  {
  }

}

