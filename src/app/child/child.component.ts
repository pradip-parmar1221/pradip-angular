import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  constructor(private sharedService: SharedService) {}
  private apiUrl = environment.apiUrl;
  triggerParentFunction(message:any) {

    this.sharedService.triggerFunction(this.apiUrl); // Pass the data to the first component
  }
}
