import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonEngine } from '@angular/ssr';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { LoginComponent } from "./layout/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, LoginComponent]
})

export class AppComponent {
  title = 'AdrianoVale';
  
}
