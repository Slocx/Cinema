import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/shared/models/salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  @Input() salle!: Salle;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewSalle(): void {
    this.router.navigate(['../salles', this.salle.id]);
  }
}
