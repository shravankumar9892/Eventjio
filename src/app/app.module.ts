import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_helpers/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DialogAuthentication } from './_services/auth.component';
import { PreviewEventsComponent } from './preview-events/preview-events.component';
import { PreviewBoxOfficeComponent } from './preview-box-office/preview-box-office.component';
import { ConfirmationDialogComponent } from './_components/confirmation-dialog/confirmation-dialog.component';
import {OnlyNumberDirective} from './only-number.directive'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DialogAuthentication,
    PreviewEventsComponent,
    PreviewBoxOfficeComponent,
    ConfirmationDialogComponent,
    OnlyNumberDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
    DialogAuthentication,
    ConfirmationDialogComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
