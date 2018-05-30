import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CommonService } from './services/common.service';
import { HttpModule } from '@angular/http';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AuthGuardService } from './auth/authguard';
import { AuthGuardLoginService } from './auth/authguardlogin';

const appRoutes:Routes=[
	{
		path:'login',
		component:LoginComponent,
		canActivate:[AuthGuardLoginService]
	},
	{
		path:'register',
		component:RegisterComponent,
		canActivate:[AuthGuardLoginService]
	},
	{
		path:'main',
		component:MainpageComponent,
		canActivate:[AuthGuardService]
	},
	{
		path:'',
		redirectTo:'/login',
		pathMatch:'full',
		canActivate:[AuthGuardLoginService]
	}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CommonService, AuthGuardService, AuthGuardLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
