import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { MaterialModule } from '../_helpers/material.module';
import {MatTableModule} from '@angular/material/table';
import { OrdersComponent } from './orders/orders.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CustomersComponent } from './customers/customers.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


import {AddNewTicketType} from './events/events.component';
import {AddNewTicketGroup} from './events/events.component';

import { myCreateDiscountCodeDialog} from './coupons/coupons.component';
import { myBatchVoucherCodeDialog} from './coupons/coupons.component';
import { ExportOrderDialog} from './orders/orders.component';
import { AddNewOrderDialog} from './orders/orders.component';
import { BookTicketDialog} from './orders/orders.component';
import { OrderInvoiceDialog} from './orders/orders.component';




@NgModule({
  declarations: [DashboardComponent, 
     EventsComponent,
     CouponsComponent,
      OrdersComponent, 
      CustomersComponent,
      myCreateDiscountCodeDialog,
      myBatchVoucherCodeDialog,
      ExportOrderDialog,
      AddNewOrderDialog,
      BookTicketDialog,
      AddNewTicketType,
      AddNewTicketGroup,
      OrderInvoiceDialog
  ],
  imports: [
    CommonModule, SuperAdminRoutingModule, MaterialModule, MatTableModule,
    FlexLayoutModule,FontAwesomeModule,MatTooltipModule,HttpClientModule,MatCardModule,MatExpansionModule,
  ],
  entryComponents: [myCreateDiscountCodeDialog,myBatchVoucherCodeDialog,ExportOrderDialog,AddNewOrderDialog,BookTicketDialog,
    OrderInvoiceDialog,AddNewTicketType,AddNewTicketGroup],
})
  
export class SuperAdminModule {}
