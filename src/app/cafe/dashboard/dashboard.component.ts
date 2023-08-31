import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showFiller: boolean;

  constructor(private sharedServices: SharedService) {}

  ngOnInit(): void {
    this.sharedServices.toggleDrawerObservable().subscribe((value) => {
      this.showFiller = !value;
    });
  }


}
