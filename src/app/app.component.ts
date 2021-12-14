import { BranchDeepLinks, BranchInitEvent } from 'capacitor-branch-deep-links';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    BranchDeepLinks.addListener('init', (evt: BranchInitEvent) => {
      console.log('init', evt);
      alert(`Branch is init ${evt.referringParams?.['+non_branch_link']}`);
    });
  }
}
