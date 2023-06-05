import { Component, Input } from '@angular/core';
import { ProjectInfo } from '../../shared/types';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent {

  open = new BehaviorSubject(false);

  @Input() project!: ProjectInfo;
}
