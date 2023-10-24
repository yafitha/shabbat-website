import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links = [
    { title: 'Home', fragment: '/' },
    { title: 'Learn', fragment: '/learn' },
    { title: 'Cards', fragment: '/card-details' },
  ];
}
