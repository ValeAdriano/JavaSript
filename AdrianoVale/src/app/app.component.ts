import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new/new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
  <div class='child1'>
  <h1> Curso de Angular </h1>
  <app-new />


  {{title}}
 </div>
  
  `
})
export class AppComponent {
  title = 'AdrianoVale';
}


// <router-outlet />