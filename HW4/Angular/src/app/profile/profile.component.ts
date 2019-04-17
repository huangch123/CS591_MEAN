import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {
    name: 'Guest',
    loc: 'Boston'
  };

  constructor() { }

  ngOnInit() {
    const storedName = localStorage.getItem('name');
    const storedLoc = localStorage.getItem('loc');

    if (storedName !== null) {
      this.user.name = storedName;
    } else {
      localStorage.setItem('name', this.user.name);
    }

    if (storedLoc !== null) {
      this.user.loc = storedLoc;
    } else {
      localStorage.setItem('loc', this.user.loc);
    }
  }

  update(): void {
    localStorage.setItem('name', this.user.name);
    localStorage.setItem('loc', this.user.loc);
  }

}
