import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { environment } from '../../environments/environment';
import { string } from '../common/string';
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  constructor(private sharedService: SharedService) {}
   apiUrl = environment.apiUrl;
   login=string.logion
  triggerParentFunction(message:any) {

    this.sharedService.triggerFunction(message); // Pass the data to the first component
  }
}
