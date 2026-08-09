import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="hero section">
      <div class="eyebrow">FULL-STACK DEVELOPER</div>
      <h1>Building web applications that solve real business problems.</h1>
      <p class="hero-copy">{{ portfolio.profile.summary }}</p>
      <div class="hero-actions">
        <a class="button primary" href="#projects">View my work</a>
        <a class="button secondary" href="#contact">Get in touch</a>
      </div>
      <div class="hero-stack">
        <span>Angular</span><span>TypeScript</span><span>.NET Core</span><span>Node.js</span><span>Laravel</span>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section-heading">
        <div>
          <div class="eyebrow">SELECTED WORK</div>
          <h2>Projects</h2>
        </div>
        <p>{{ filteredProjects().length }} projects</p>
      </div>

      <div class="filters">
        @for (category of categories(); track category) {
          <button
            [class.active]="selectedCategory() === category"
            (click)="selectedCategory.set(category)">
            {{ category }}
          </button>
        }
      </div>

      <div class="project-grid">
        @for (project of filteredProjects(); track project.id) {
          <article class="project-card">
            <div class="project-number">{{ $index + 1 | number: '2.0-0' }}</div>
            <div class="project-category">{{ project.category }}</div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <div class="tags">
              @for (tech of project.technologies.slice(0, 6); track tech) {
                <span>{{ tech }}</span>
              }
            </div>
            <a class="project-link" [routerLink]="['/projects', project.id]">
              View project <span>↗</span>
            </a>
          </article>
        }
      </div>
    </section>

    <section id="skills" class="section skills-section">
      <div class="eyebrow">TOOLKIT</div>
      <h2>Technical Skills</h2>
      <div class="skill-groups">
        @for (group of skillGroups; track group.label) {
          <div class="skill-group">
            <h3>{{ group.label }}</h3>
            <div class="tags">
              @for (skill of group.items; track skill) {
                <span>{{ skill }}</span>
              }
            </div>
          </div>
        }
      </div>
    </section>

    <section id="experience" class="section experience-section d-none">
      <div class="eyebrow">BACKGROUND</div>
      <h2>Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <span>2023 — Present</span>
          <div><h3>BCS Technology International</h3><p>Angular Developer / Full-Stack Developer</p></div>
        </div>
        <div class="timeline-item">
          <span>2022 — 2023</span>
          <div><h3>WestActon, Inc.</h3><p>Developer</p></div>
        </div>
        <div class="timeline-item">
          <span>2019 — 2021</span>
          <div><h3>SpinifexIT Philippines Inc.</h3><p>Developer</p></div>
        </div>
        <div class="timeline-item">
          <span>2017 — 2019</span>
          <div><h3>Super 7 Solutions</h3><p>Developer</p></div>
        </div>
        <div class="timeline-item">
          <span>2016</span>
          <div><h3>Arktech Philippines</h3><p>Developer</p></div>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="contact-card">
        <div>
          <div class="eyebrow">LET'S TALK</div>
          <h2>Have a project in mind?</h2>
          <p>I'm open to discussing full-stack, Angular / React, and web application opportunities.</p>
        </div>
        <a class="button primary" href="mailto:{{ portfolio.profile.email }}">Contact me</a>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly portfolio = PORTFOLIO;
  readonly selectedCategory = signal('All');

  readonly categories = computed(() => [
    'All',
    ...new Set(this.portfolio.projects.map((project) => project.category))
  ]);

  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    return category === 'All'
      ? this.portfolio.projects
      : this.portfolio.projects.filter((project) => project.category === category);
  });

  readonly skillGroups = [
    { label: 'Frontend', items: PORTFOLIO.additionalExperience.frontend },
    { label: 'Backend', items: PORTFOLIO.additionalExperience.backend },
    { label: 'Databases & Storage', items: PORTFOLIO.additionalExperience.databasesAndStorage },
    { label: 'Cloud & Services', items: PORTFOLIO.additionalExperience.cloudAndServices },
    { label: 'Tools', items: PORTFOLIO.additionalExperience.tools },
    { label: 'Engineering', items: PORTFOLIO.additionalExperience.testingAndEngineering }
  ];
}