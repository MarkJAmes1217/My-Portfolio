import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})

export class PortfolioComponent {
  projects = [
    {
      name: 'Airline Booking System',
      description: 'Full-stack booking system with seat selection and payment integration.',
      tech: ['Angular', 'NestJS', '.NET Core']
    },
    {
      name: 'Sports Betting Platform',
      description: 'Real-time betting app with dynamic odds and live updates.',
      tech: ['Angular', 'RxJS', 'WebSockets']
    },
    {
      name: 'Food Booking App',
      description: 'Online food reservation and ordering platform.',
      tech: ['React', 'Laravel']
    }
  ];

  skills = [
    'Angular', 'React', 'NestJS', 'Laravel', '.NET Core',
    'TypeScript', 'JavaScript', 'MySQL', 'PostgreSQL', 'Git'
  ];
}
