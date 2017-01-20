import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent implements OnInit {

  constructor() { }
  
  @Input() selectedId: string;

  ngOnInit() {
  }
}

