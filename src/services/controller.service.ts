import { Injectable } from '@angular/core';
import { Appartment } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

constructor() { }
color=['#add8e6','#90ee90','#ffb6c1','#DDBDF1','#F08080','#E8ADAA','#CCCCFF','#E9E4D4','#EAEEE9','#98AFC7','#5CB3FF','#B0E0E6','#7FFFD4','#50C878','#FAEBD7']
status=[true,false,true]
count:number=20;
apartments:Appartment[]=[]
 getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  getDeviceData():Appartment[]{
    for (let i = 1; i <= this.count; i++) {
      let apt:Appartment={
        apartmentNumber:i,
        status:this.status[this.getRandomInt(0,2)],
        color:this.color[this.getRandomInt(0,12)],
        lastActionTime:new Date().toUTCString()
      }
      this.apartments.push(apt)
    }
    this.apartments = this.apartments.sort((a, b) => b.apartmentNumber - a.apartmentNumber);
  return this.apartments
  }

  addDeviceData():Appartment[]{
    console.log(this.apartments)
    let newApartment=[]
    for (let i = this.apartments.length+1; i <= this.apartments.length + 4; i++) {
      let apt:Appartment={
        apartmentNumber:i,
        status:this.status[this.getRandomInt(0,2)],
        color:this.color[this.getRandomInt(0,12)],
        lastActionTime:new Date().toUTCString()

      }
      newApartment.push(apt)
    }
    this.apartments=[...this.apartments, ...newApartment]
    this.apartments = this.apartments.sort((a, b) => b.apartmentNumber - a.apartmentNumber);
  return this.apartments
  }
}
