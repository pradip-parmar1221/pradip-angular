import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private triggerFunctionSource = new Subject<void>();
  private successFunctionSource = new Subject<void>();
  triggerFunction$ = this.triggerFunctionSource.asObservable();
  successFunction$ = this.successFunctionSource.asObservable();

  triggerFunction(data: any) {
    this.triggerFunctionSource.next(data); // Pass the data here
  }
  successFunction(data: any) {
    this.successFunctionSource.next(data); // Pass the data here
  }
}
