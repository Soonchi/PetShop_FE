import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {OrderService} from "../service/order.service";
import {UpdateStatus} from "../models/UpdateStatus";

@Component({
  selector: 'app-dialog-notification',
  templateUrl: './dialog-notification.component.html',
  styleUrls: ['./dialog-notification.component.scss']
})
export class DialogNotificationComponent implements OnInit {
   status = "Đã hủy";

   orderDetails: any[] =[];

  constructor(private dialog: MatDialogRef<DialogNotificationComponent>,
              private orderService: OrderService) {
  }
  closeDialog() {
    this.dialog.close();
  }

  ngOnInit(): void {
    this.getOrder()
  }

  updateStatus(id: any){
    const data: UpdateStatus = {
      id: id,
      status: this.status
    }
    this.orderService.updateStatus(data).subscribe(data => {
      window.location.reload();
    })
  }

  getOrder() {
    this.orderService.getOrderDetails().subscribe((data:any) => {
      this.orderDetails = data;
    })
  }
}
