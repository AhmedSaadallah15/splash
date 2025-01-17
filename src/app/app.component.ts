import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from "./components/products/products.component";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUSComponent } from "./components/contact-us/contact-us.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, ProductsComponent, AboutUsComponent, ContactUSComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-name';
}
