import { Injectable } from '@angular/core';
import projects from '../assets/projects.json';
import { ProjectInfo } from './shared/types';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjectsInfo(){
    return projects as ProjectInfo[]
  }
}
