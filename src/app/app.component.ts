import { Component, computed, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  language = signal('');
  nextLanguage = computed(() => this.language() === 'pl' ? 'en' : 'pl')

  constructor(private translateService: TranslateService){
    this.language.set(this.translateService.currentLang);
  }


  toggleLanguage(){
    this.translateService.use(this.nextLanguage())
    this.language
  }

}
