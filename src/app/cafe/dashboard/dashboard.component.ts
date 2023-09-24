import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  bills: number;
  categories: number;
  products: number;

  constructor(private _router: Router, private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService
      .dashboardDetails()
      .pipe()
      .subscribe({
        next: (result) => {
          this.bills = result.data.bills;
          this.categories = result.data.categories;
          this.products = result.data.products;
        },
        error: (error) => {
          console.error('An error Occured', error);
        },
        complete: () => {},
      });
  }
}
