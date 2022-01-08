// Base angular modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // button onClick events
  // olympic button event onClick
  olympic() {
    this.router.navigateByUrl('/chart/olympic');
  }

  // marathon button event onClick
  marathon() {
    this.router.navigateByUrl('/chart/marathon');
  }

  // population button event onClick
  population() {
    this.router.navigateByUrl('/chart/population');
  }

  // mortality button event onClick
  mortality() {
    this.router.navigateByUrl('/chart/mortality');
  }

}
