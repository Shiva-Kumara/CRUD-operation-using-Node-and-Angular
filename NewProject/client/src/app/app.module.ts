import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { appRoutes } from './routes';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { EmployeeComponent } from './employee/employee.component';

import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
