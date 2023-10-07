import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ControllerService } from 'src/services/controller.service';


export interface Appartment {
  apartmentNumber: number;
  status: boolean;
  color: string;
  lastActionTime:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dialogRef: any;
  @ViewChild('apartmentDialog') aptDialog = {} as TemplateRef<Appartment>; 
  constructor(public dialog: MatDialog,private controllerService:ControllerService) {}
  title = 'Task7.1';
  apartments: Appartment[] = [];
  public color: ThemePalette = 'primary';

  ngOnInit(){
    this.apartments= this.controllerService.getDeviceData();
  }

  openApartmentDialog(selected:Appartment) {
    this.dialogRef = this.dialog.open(this.aptDialog,
     { data: selected, height: '190px', width: '380px' });
   } 

  updateTimestamp(selected:Appartment) {
    const foundIndex = this.apartments.findIndex((object) => object.apartmentNumber === selected.apartmentNumber);
    if (foundIndex !== -1) {
      this.apartments[foundIndex].lastActionTime = new Date().toUTCString();
    }
   } 

   onCancelDialog() {
    this.dialogRef.close();
  }

  addApartments(){
    this.apartments= this.controllerService.addDeviceData();
  }
}
