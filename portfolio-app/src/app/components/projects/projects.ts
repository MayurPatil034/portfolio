import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; margin-bottom: 30px;">Projects</h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        <div *ngFor="let project of projects" 
             style="background: #f8f9fa; padding: 25px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: transform 0.3s;">
          <h3 style="color: #3498db; margin: 0 0 15px 0; font-size: 20px;">{{project.name}}</h3>
          <p style="color: #555; line-height: 1.6; margin-bottom: 15px; font-size: 14px;">{{project.description}}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <span *ngFor="let tech of project.technologies" 
                  style="background: #3498db; color: white; padding: 5px 12px; border-radius: 15px; font-size: 12px;">
              {{tech}}
            </span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectsComponent {
  projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website with shopping cart, payment integration, and admin panel.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap']
    },
    {
      name: 'Task Management App',
      description: 'Real-time task management application with drag-and-drop functionality and user collaboration.',
      technologies: ['Angular', 'Firebase', 'Material Design']
    },
    {
      name: 'Weather Dashboard',
      description: 'Interactive weather dashboard displaying real-time weather data with charts and forecasts.',
      technologies: ['Angular', 'API Integration', 'Chart.js']
    }
  ];
}