import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com/';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://lorempixel.com/400/200/nature/';

  constructor() { }

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean{
    return true;
  }

  ngOnInit(): void {
  }

}
