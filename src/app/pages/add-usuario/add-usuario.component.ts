import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {
  protected usuario:Usuario = new Usuario;

  constructor(
    protected usuarioServece:UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onsubmit(form){
    console.log(this.usuario);
    this.usuarioServece.save(this.usuario).subscribe(
      res=>{
        console.log("Castrodo!" , res);
        alert("Castrodo!");
        form.reset()
        this.router.navigate(['addUsuario']);
        
      },
          err=>{
            console.log("Não cadastrado!" ,err);
            alert("Não cadastrado!");
            }
          )
        
      

  }
  protected cep:string;

  buscaCep(){
    if (this.cep.length > 7)
    this.usuarioServece.getEndereco(this.cep).subscribe(
      res =>{
        console.log(res);
      }

    )
  }

}
