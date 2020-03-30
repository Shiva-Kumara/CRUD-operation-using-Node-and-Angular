import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  serverErrorMessages: string;
  constructor(public userService: UserService, public router: Router) { }

  model ={
    email: '',
    password: ''
  };

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res =>{
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/employee');
      },
      err =>{
        err = "Invalid UserName and Password";
        this.serverErrorMessages = err;
      }
    )
  }
}
