import { Component } from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id
})
export class ChallengeEditComponent {
  challengeDescription = '';

  setChallenge() {
    console.log(this.challengeDescription);
    //this.currentChallenge = this.challengeDescription;
  }
}
