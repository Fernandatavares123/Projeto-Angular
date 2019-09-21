import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  protected eventos:any;

  constructor(
    protected eventoService:EventoService
  ) { }
 
  ngOnInit() {
    this.eventos = this.eventoService.getAll();
  }
}