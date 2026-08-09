import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (project; as item) {
      <section class="project-detail section">
        <a class="back-link" routerLink="/">← Back to projects</a>

        <div class="eyebrow">{{ item.category }}</div>
        <h1>{{ item.name }}</h1>
        <p class="lead">{{ item.description }}</p>

        <div class="detail-meta">
          <div><small>ROLE</small><strong>{{ item.role }}</strong></div>
          @if (item.employer) {
            <div><small>EMPLOYER</small><strong>{{ item.employer }}</strong></div>
          }
          @if (item.period) {
            <div><small>PERIOD</small><strong>{{ item.period }}</strong></div>
          }
        </div>

        <div class="detail-grid">
          <div>
            <h2>Responsibilities</h2>
            <ul>
              @for (item of item.responsibilities; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </div>

          <div>
            <h2>Highlights</h2>
            <ul>
              @for (highlight of item.portfolioHighlights; track highlight) {
                <li>{{ highlight }}</li>
              }
            </ul>
          </div>
        </div>

        <h2>Technology Stack</h2>
        <div class="stack-grid">
          @for (entry of stackEntries(item); track entry.label) {
            <div class="stack-card">
              <h3>{{ entry.label }}</h3>
              <div class="tags">
                @for (tech of entry.items; track tech) {
                  <span>{{ tech }}</span>
                }
              </div>
            </div>
          }
        </div>

        @if (item.notes?.length) {
          <div class="notes">
            <h2>Notes</h2>
            @for (note of item.notes; track note) {
              <p>{{ note }}</p>
            }
          </div>
        }
      </section>
    } @else {
      <section class="section not-found">
        <h1>Project not found</h1>
        <a class="button primary" routerLink="/">Back home</a>
      </section>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  readonly project: Project | undefined;

  constructor(route: ActivatedRoute, private readonly location: Location) {
    const id = route.snapshot.paramMap.get('id');
    this.project = PORTFOLIO.projects.find((project) => project.id === id);
    console.log('ProjectComponent initialized with project:', this.project);
  }

  stackEntries(project: Project): { label: string; items: string[] }[] {
    return [
      { label: 'Frontend', items: project.stack.frontend ?? [] },
      { label: 'Test Automation', items: project.stack.testAutomation ?? [] },
      { label: 'Backend', items: project.stack.backend ?? [] },
      { label: 'Database', items: project.stack.database ?? [] },
      { label: 'APIs', items: project.stack.apis ?? [] },
      { label: 'Tools', items: project.stack.tools ?? [] },
      { label: 'Project Management', items: project.stack.projectManagement ?? [] },
      { label: 'DevOps', items: project.stack.devops ?? [] }
    ].filter((entry) => entry.items.length > 0);
  }
}