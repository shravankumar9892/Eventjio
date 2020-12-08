import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { ErrorService } from '../../../_services/error.service';
import { environment } from '../../../../environments/environment'
import { SettingService } from '../_services/setting.service';

@Component({
  selector: 'app-referral-code',
  templateUrl: './referral-code.component.html',
  styleUrls: ['./referral-code.component.scss']
})
export class ReferralCodeComponent implements OnInit {

  boxOfficeCode:any;
  boxOfficeLink:any;
  isLoaderAdmin:boolean =false;
  allReferralCodeList:any;
  singleCodeData:any;
  boxOfficeUrl:any;
  constructor(
    public dialog: MatDialog,
    private SettingService : SettingService,
    private ErrorService : ErrorService,) { 
      
      if(localStorage.getItem('boxoffice_id')){
        this.boxOfficeCode = localStorage.getItem('boxoffice_id');   
      }
      
      if(localStorage.getItem('boxoffice_link')){
        this.boxOfficeLink = localStorage.getItem('boxoffice_link');   
      }
      this.fnGetAllReferralCodes();
      if(this.boxOfficeLink){
        this.boxOfficeUrl= environment.bookingPageUrl+'/box-office/'+this.boxOfficeLink
      }else{

        this.boxOfficeUrl= environment.bookingPageUrl+'/box-office/'+this.boxOfficeCode
      }
  }

  ngOnInit(): void {
  }

  fnGetAllReferralCodes(){
    let requestObject = {
      "boxoffice_id"  : this.boxOfficeCode,
      "option_key"    :  "referralCode",
      "event_id" :  'NULL',
      'json_type' : 'Y'
    }
    this.isLoaderAdmin = true;
        this.SettingService.getSettingsValue(requestObject).subscribe((response:any) => {
          if(response.data == true){
           this.allReferralCodeList = JSON.parse(response.response)
          }
          else if(response.data == false){
           this.ErrorService.errorMessage(response.response);
          }
          this.isLoaderAdmin = false;
        })
  }

  updateReferralCode(index){
    this.singleCodeData= this.allReferralCodeList[index];
    const dialogRef = this.dialog.open(addReferralCodeDialog,{
      width: '700px',
      data:{
        boxOfficeCode:this.boxOfficeCode,
        allReferralCodeList:this.allReferralCodeList,
        singleCodeData:this.singleCodeData,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fnGetAllReferralCodes();
       this.singleCodeData = null;
      // this.getAllAddTax();
    });
  }

  fnDeleteReferralCode(i){
    let selectedCodeData= this.allReferralCodeList[i];
    const index: number = this.allReferralCodeList.indexOf(selectedCodeData);
    if (index !== -1) {
        this.allReferralCodeList.splice(index, 1);
    }    
    let requestObject = {
      "boxoffice_id"  : this.boxOfficeCode,
      "option_key"    :  "referralCode",
      "option_value" : this.allReferralCodeList,
      "event_id" :  null,
      'json_type' : 'Y'
    }

    this.isLoaderAdmin = true;
    this.SettingService.updateSetting(requestObject).subscribe((response:any) => {
      if(response.data == true){
       this.ErrorService.successMessage(response.response);
      this.fnGetAllReferralCodes();
      }
      else if(response.data == false){
       this.ErrorService.errorMessage(response.response);
      }
      this.isLoaderAdmin = false;
    })
  }
  
  fnAddReferralCode(){
    const dialogRef = this.dialog.open(addReferralCodeDialog,{
      width: '700px',
      data:{
        boxOfficeCode:this.boxOfficeCode,
        allReferralCodeList:this.allReferralCodeList,
        // singleCodeData:this.singleCodeData,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fnGetAllReferralCodes();
      this.singleCodeData = null;
      // this.getAllAddTax();
    });
  }

}


@Component({
  selector: 'Add-Referral-Code',
  templateUrl: '../_dialogs/addReferralCode.html',
})

export class addReferralCodeDialog {
  
  addRefferalCodeForm:FormGroup;
  boxOfficeCode:any;
  isLoaderAdmin:any;
  singleCodeData:any;
  allReferralCodeList :any =[];
  constructor(
  private _formBuilder:FormBuilder,
  public dialogRef: MatDialogRef<addReferralCodeDialog>,
  private http: HttpClient,
  private SettingService : SettingService,
  private ErrorService : ErrorService,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.boxOfficeCode = this.data.boxOfficeCode
    this.allReferralCodeList = this.data.allReferralCodeList
    this.singleCodeData = this.data.singleCodeData

    this.addRefferalCodeForm = this._formBuilder.group({
      type:['',[Validators.required]],
      code:['',[Validators.required]],
    })
    if(this.singleCodeData){
      this.addRefferalCodeForm.controls['type'].setValue(this.singleCodeData.type);
      this.addRefferalCodeForm.controls['code'].setValue(this.singleCodeData.code);
    }
  }

  
  ngOnInit(): void {
  }

  fnCreateNewReferralCode(){
    if(this.addRefferalCodeForm.invalid){
      this.addRefferalCodeForm.get('type').markAsTouched();
      this.addRefferalCodeForm.get('code').markAsTouched();
      return false
    }else{
      if(this.singleCodeData){
        const index: number = this.allReferralCodeList.indexOf(this.singleCodeData);
        if (index !== -1) {
            this.allReferralCodeList.splice(index, 1);
        }        
        let newReferralCodeData ={
          'type': this.addRefferalCodeForm.get('type').value,
          'code': this.addRefferalCodeForm.get('code').value,
        }
         this.allReferralCodeList.push(newReferralCodeData);
        let requestObject = {
          "boxoffice_id"  : this.boxOfficeCode,
          "option_key"    :  "referralCode",
          "option_value" : this.allReferralCodeList,
          "event_id" :  null,
          'json_type' : 'Y'
        }

        this.isLoaderAdmin = true;
        this.SettingService.updateSetting(requestObject).subscribe((response:any) => {
          if(response.data == true){
           this.ErrorService.successMessage(response.response);
            this.addRefferalCodeForm.reset();
            this.dialogRef.close();
          }
          else if(response.data == false){
           this.ErrorService.errorMessage(response.response);
          }
          this.isLoaderAdmin = false;
          this.addRefferalCodeForm.reset();
        })

      }else{
        let newReferralCodeData ={
          'type': this.addRefferalCodeForm.get('type').value,
          'code': this.addRefferalCodeForm.get('code').value,
        }
         this.allReferralCodeList.push(newReferralCodeData);
        let requestObject = {
          "boxoffice_id"  : this.boxOfficeCode,
          "option_key"    :  "referralCode",
          "option_value" : this.allReferralCodeList,
          "event_id" :  null,
          'json_type' : 'Y'
        }
        this.isLoaderAdmin = true;
        this.SettingService.updateSetting(requestObject).subscribe((response:any) => {
          if(response.data == true){
           this.ErrorService.successMessage(response.response);
            this.addRefferalCodeForm.reset();
            this.dialogRef.close();
          }
          else if(response.data == false){
           this.ErrorService.errorMessage(response.response);
          }
          this.isLoaderAdmin = false;
          this.addRefferalCodeForm.reset();
        })
      }
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


}
