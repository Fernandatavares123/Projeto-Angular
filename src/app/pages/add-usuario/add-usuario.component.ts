import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {
  protected usuario:Usuario = new Usuario;

  constructor() { }

  ngOnInit() {
  }
  onsubmit(from){
    console.log(this.usuario);
  }

}
