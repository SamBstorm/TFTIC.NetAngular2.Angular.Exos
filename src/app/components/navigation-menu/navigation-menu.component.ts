import { Component, OnInit } from '@angular/core';
import { INavItem } from 'src/app/models/inav-item';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  public routes : INavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.routes.push({name:"Démonstrations", route: "/demo"});
    this.routes.push({name:"Exercices", route: "/exos"});
  }

}
