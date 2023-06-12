import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentPage: string = 'landing';
  
  teamMembers = [
    { picture: 'bleh.png', name: 'Sai Praneetha', role: 'Role 1' },
    { picture: 'bleh.png', name: 'Gourav Mohanty', role: 'Role 2' },
    { picture: 'bleh.png', name: 'Samarth Rawat', role: 'Role 3' },
    { picture: 'bleh.png', name: 'Pramod Goyal', role: 'Role 4' }
  ];

  constructor(private router: Router) {}

  goToFormsPage() {
    this.currentPage = 'forms';
  }

  goToTeamSection() {
    const element = document.getElementById('team-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
