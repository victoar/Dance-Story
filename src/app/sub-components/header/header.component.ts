import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToSection(id: string) {
    const headerHeight = document.querySelector('.header').clientHeight || 0;
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const yOffset = -headerHeight;
      const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  }

}
