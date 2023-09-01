import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  showFiller: boolean;
  constructor(private sharedServices: SharedService) {}

  ngOnInit(): void {
    this.sharedServices.value$.subscribe((value) => {
      this.showFiller = value;
    });
  }
}
