import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/model/evento';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
 
  protected evento:Evento = new Evento;

  constructor (
    protected eventoServece:EventoService,
    protected router:Router
    
  ){}

  
  
 
  ngOnInit() {
  }
  onsubmit(form){
    console.log(this.evento);
    this.eventoServece.save(this.evento).subscribe(
      res=>{
        console.log("Ativo!" , res);
        alert("Ativo!");
        form.reset()
        this.router.navigate(['addEvento']);
        
      },
      err=>{
        console.log("Não cadastrado!" ,err);
        alert("Não cadastrado!");
        }
     )
    
  

    }
  }
