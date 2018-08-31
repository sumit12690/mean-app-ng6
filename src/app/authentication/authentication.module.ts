import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelpComponent, LoginComponent, RegisterComponent],
  exports: [HelpComponent, LoginComponent, RegisterComponent]
})
export class AuthenticationModule { }
