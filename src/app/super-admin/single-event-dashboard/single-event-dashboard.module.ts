import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../_helpers/material.module';
import { SingleEventDashboard } from './single-event-dashboard'
import { SingleEventDashboardRoutingModule } from './single-event-dashboard-routing.module';
import { EventSummaryComponent } from './event-summary/event-summary.component';
import { EventAndTicketTypesComponent } from './event-and-ticket-types/event-and-ticket-types.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { DeleteComponent } from './delete/delete.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { WaitilistSignupComponent } from './waitilist-signup/waitilist-signup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { IssuedTicketComponent } from './issued-ticket/issued-ticket.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { addBuyeronlyQuestionDialog} from './checkout-form/checkout-form.component';
import { addAttendeeonlyQuestionDialog} from './checkout-form/checkout-form.component';
import { editBuyerNameDialog} from './checkout-form/checkout-form.component';
import { editAttendeeNameDialog} from './checkout-form/checkout-form.component';

import { CKEditorModule } from 'ngx-ckeditor';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { mySendBroadcastDialog } from './broadcast/broadcast.component';
import { DuplicateComponent } from './duplicate/duplicate.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ExportDoorListComponent } from './issued-ticket/issued-ticket.component'
import { IssuedTicketViewComponent } from './issued-ticket/issued-ticket.component'

@NgModule({
  declarations: [EventSummaryComponent,
    SingleEventDashboard, 
    EventAndTicketTypesComponent, 
    CheckoutFormComponent, 
    DeleteComponent,
    IssuedTicketComponent, 
    WaitilistSignupComponent, 
    OrderConfirmationComponent,
    addBuyeronlyQuestionDialog,
    addAttendeeonlyQuestionDialog,
    editBuyerNameDialog,
    editAttendeeNameDialog,
    BroadcastComponent,  
    mySendBroadcastDialog, 
    DuplicateComponent,
    ExportDoorListComponent,
    IssuedTicketComponent
  ],
    
    imports: [
      CommonModule,
      SingleEventDashboardRoutingModule,
      MaterialModule,
      CKEditorModule,
      FlexLayoutModule,
      MatExpansionModule,
      CKEditorModule,
      MatTooltipModule,],

    entryComponents: [mySendBroadcastDialog,addBuyeronlyQuestionDialog,addAttendeeonlyQuestionDialog,editBuyerNameDialog,editAttendeeNameDialog,ExportDoorListComponent,
      IssuedTicketComponent],
  
  
})
export class SingleEventDashboardModule { }
