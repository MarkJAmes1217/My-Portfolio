import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/">M<span>.</span></a>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
      </nav>
    </header>

    <main>
      <router-outlet />
    </main>

    <footer>
      <span>© {{ year }} Mark Dela Cruz</span>
      <span>Built with Angular</span>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly year = new Date().getFullYear();
}