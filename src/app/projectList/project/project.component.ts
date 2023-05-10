import { Component, Input } from '@angular/core';
import { ProjectInfo } from '../../shared/types';
import { Lightbox } from 'ngx-lightbox';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent {
  constructor(private _lightbox: Lightbox){}

  open = new BehaviorSubject(false);

  @Input() project!: ProjectInfo;
}
