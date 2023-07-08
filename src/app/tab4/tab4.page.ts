import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(
    private router: Router
    ) {}
  clicked(){
    console.log("clicked");
    this.router.navigate(['tabs/tab3']);
  }
}

