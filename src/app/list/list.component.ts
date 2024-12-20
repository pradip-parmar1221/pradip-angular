import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import {  OnInit } from '@angular/core';
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
  selector: 'app-list',
  templateUrl: './list.component.html',
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule]
})
export class listComponent {


  data = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `123-456-789${i}`,
  }));

  rowsPerPage = 5;
  currentPage = 1;
  totalPages: number=0;
  pageData:any

  constructor(private fb: FormBuilder, private http: HttpClient, private sharedService: SharedService) {

  }
  ngOnInit(): void {
    this.totalPages = Math.ceil(this.data.length / this.rowsPerPage);
    this.renderTable();
  }
  renderTable() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    this.pageData = this.data.slice(start, end);
  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.renderTable();
    }
  }

  // Previous page
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.renderTable();
    }
  }

  // Navigate to a specific page
  goToPage(page: number) {
    this.currentPage = page;
    this.renderTable();
  }
  getPaginationRange() {
    const range = [];
    let startPage = Math.max(1, this.currentPage - 1);  // Shows 3 pages at first
    let endPage = Math.min(this.totalPages, startPage + 2);  // Display the next two pages
   
    for (let i = startPage; i <= endPage; i++) {
      console.log(startPage,endPage)
    if(endPage-startPage==1 && i==startPage){
       range.push(i-1);
    }
      range.push(i);
    }
    return range;
  }



  getData() {
    var param={

    }
    this.http.post(environment.apiUrl = "/item/create", param).subscribe((data: any) => {
      if (data.success == 1) {
        this.sharedService.successFunction(data.message)
      } else {
        this.sharedService.triggerFunction(data.message)
      }

    })
  }
}