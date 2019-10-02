import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
	name:'Hamza',
	city:'Rawalpindi',
	interests:['Eat','Sleep','More Sleep']
 };

  constructor() {}

}
