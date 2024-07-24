import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './views/common/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const toolbar = document.getElementById('toolbar');
    if (toolbar) {
      console.log('fdf');
      if (window.pageYOffset > 0) {
        toolbar.classList.add('bg-[#131313]');
        toolbar.classList.remove('bg-transparent');
      } else {
        toolbar.classList.add('bg-transparent');
        toolbar.classList.remove('bg-[#131313]');
      }
    }
  }
}
