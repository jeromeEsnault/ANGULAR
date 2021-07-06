import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass']
})
export class InscriptionComponent implements OnInit {
  title = 'my-app';
  currentItem = 'Television';
  constructor() { }

  ngOnInit(): void {
  }

}
