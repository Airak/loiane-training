import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal : string;
  cursos: string[];

  constructor(private cursoService: CursosService) {
    this.nomePortal = 'https://loiane.training/';
    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}
