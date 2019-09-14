import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../model/evento';


@Injectable({
    providedIn: 'root'
})

export class EventoService {

    private db =environment.serverAPI;

    constructor(
        protected http:HttpClient
    ){}

    save(evento:Evento){
        return this.http.post(this.db + "evento", evento)
    }
    getAll(){
        return this.http.get(this.db + "eventos")
    }
    
}
