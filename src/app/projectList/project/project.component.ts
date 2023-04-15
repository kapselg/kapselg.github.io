import { Component, Input } from '@angular/core';
import { ProjectInfo } from '../../shared/types';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent {
  @Input() project!: ProjectInfo;
}
