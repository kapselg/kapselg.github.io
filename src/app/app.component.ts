import { Component, computed, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  language = signal('en');
  nextLanguage = computed(() => (this.language() === 'pl' ? 'en' : 'pl'));
  flag = computed(() => `./assets/${this.nextLanguage()}.svg`);

  constructor(private translateService: TranslateService) {
    const browserLanguage = navigator.language;
    const lsLang = localStorage.getItem('lang');

    if (lsLang) this.translateService.use(lsLang);
    else if (browserLanguage in this.translateService.langs)
      this.translateService.use(browserLanguage);

    this.language.set(this.translateService.currentLang);
  }

  toggleLanguage() {
    localStorage.setItem('lang', this.nextLanguage());
    this.secret();
  }

  secret() {
    localStorage.removeItem('visited');
    location.reload();
  }
}
