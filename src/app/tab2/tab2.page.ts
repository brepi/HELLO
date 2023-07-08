import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  songList=[{"Title":"Lean on me"},
  {"Title":"ALright"},
  {"Title":"Big Egos"},
  {"Title":"That Thing"}]
  addSongs(){
    this.songList.push({"Title":"new song"});
  }
}
