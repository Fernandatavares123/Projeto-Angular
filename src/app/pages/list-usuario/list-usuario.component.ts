import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {
  
  

  usuario: Observable<Object>;
  protected usuarios: any;

  constructor(

    protected usuarioService:UsuarioService

  ) { }

  ngOnInit() {
    this.usuarios=this.usuarioService.getAll();
  }

}
