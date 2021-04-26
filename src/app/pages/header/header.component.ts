import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSection : string = '';


  constructor() { }

  ngOnInit(): void {
    this.windowScroll()
  }
  windowScroll() {
    const navbar = document.getElementById('mainNav');
   if(navbar != null){
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('navbar-shrink');
    } else {
      navbar.classList.remove('navbar-shrink');
    }
  }
  }

  scrollTo(section: string) {
    const elm = document.getElementById(section);
    if(elm != null){
      this.currentSection = section;
      elm.scrollIntoView({behavior: "smooth"});
    }

  }


}


