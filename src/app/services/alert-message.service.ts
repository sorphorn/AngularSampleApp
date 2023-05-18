import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  constructor() { }

  onShowAlertMessage(title: string){
    alert(title)
  }
}
