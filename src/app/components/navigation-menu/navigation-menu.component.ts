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
    this.routes = [
      {title:"Démonstrations", url: "/demo", isVisible:true, children :[
        {title:"Binding Demo", url:'/demo_01', isVisible:true},
        {title:"Pipe Demo", url:'/demo_02', isVisible:true},
        {title:"Directives", isVisible:true, children:[
          {title:"Directive Component Demo", url:'/demo_03', isVisible:true},
          {title:"Directive Structural Demo", url:'/demo_04', isVisible:true},
          {title:"Directive Custom Demo", url:'/demo_05', isVisible:true}
        ]},
        {title:"Input Output Demo", url : "/demo_06", isVisible : true},
        {title:"Service Demo", url : "/demo_07", isVisible : true},
        {title:"Form Demo", url : "/demo_08", isVisible : true},
        {title:"Url parameters Demo", url : "/demo_09/defaultMessage/Samuel?id=42", isVisible : true},
        {title:"Url parameters Demo Product list", url : "/demo_10", isVisible : true},
        {title:"Guard Demo", url : "/demo_11", isVisible : true},
        {title:"Session Storage Demo", url : "/demo_12", isVisible : true},
        {title:"RandomUser API Demo", url : "/demo_13", isVisible : true}
      ],
      imgSrc:"assets/home-icon.png"},
      {title:"Exercices", url: "/exos", isVisible:true, children:[
        {title : "Chronomètre", url:'/exo_01', isVisible:true},
        {title : "Shopping list input output", url:'/exo_02', isVisible:true},
        {title : "Shopping list service", url:'/exo_03', isVisible:true},
        {title : "Fan list exercice", url:'/exo_04', isVisible:true}
      ]}
    ];
  }

}
