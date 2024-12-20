import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedService } from './shared.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private subscription: Subscription | null = null; // Initialize with null
  errormessage:any
  successmessage:any
  title = 'pradip-angular-local';


  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.subscription = this.sharedService.triggerFunction$.subscribe((message:any) => {
      this.parentFunction(message);
    });
    this.subscription = this.sharedService.successFunction$.subscribe((message:any) => {
      this.successFunction(message);
    });
  }
  parentFunction(message: any): void {
    this.successmessage=undefined 
    this.errormessage=message
    setTimeout(() => {
      this.errormessage=undefined 
    }, 1500);

  }
  successFunction(message: any): void {
    this.errormessage=undefined 
    this.successmessage=message
    setTimeout(() => {
      this.successmessage=undefined 
    }, 1500);

  }
}
