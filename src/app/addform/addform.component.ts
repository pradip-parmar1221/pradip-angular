import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment';
import { SharedService } from '../shared.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-user-form',
  templateUrl: './addform.component.html',
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule]
})
export class AddFormComponent {

  userForm: FormGroup;
  selectedFile: File | null = null;
  username: any;


  constructor(private fb: FormBuilder, private http: HttpClient, private sharedService: SharedService) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.userForm.valid && this.selectedFile) {
      const formDataImage = new FormData();
      formDataImage.append('invoice_img', this.selectedFile);

      ;


      this.http.post(environment.apiUrl + "item/invoice_img_upload", formDataImage).subscribe((data: any) => {

        if (data.success == 1) {

          var param = {
            username: this.userForm.get('username')?.value,
            email: this.userForm.get('email')?.value,
            phone: this.userForm.get('phone')?.value,
            image: data.data[0].invoice_img,
          }

          this.http.post(environment.apiUrl = "/item/create", param).subscribe((data: any) => {
            if (data.success == 1) {
              this.sharedService.successFunction(data.message)
            } else {
              this.sharedService.triggerFunction(data.message)
            }

          })
        } else {
          this.sharedService.triggerFunction(data.message)
        }

      })


    }
  }
}