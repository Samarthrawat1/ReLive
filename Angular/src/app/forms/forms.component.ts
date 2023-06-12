import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  personalityTraits: string[] = [];
  newTrait: string = '';

  addPersonalityTrait(): void {
    if (this.newTrait.trim()) {
      this.personalityTraits.push(this.newTrait.trim());
      this.newTrait = '';
    }
  }

  removePersonalityTrait(index: number): void {
    this.personalityTraits.splice(index, 1);
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addPersonalityTrait();
    }
  }

  goToTeamSection() {
    const element = document.getElementById('team-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
