import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = 'Gabriel'
    usuario.email = 'andrewsseven@gmail.com'

    return usuario
  }

  public listaUsuario():Usuario[] {
    return [
      {
        nome:"Gabriel",
        email:"andrewsseven@gmail.com"
      },
      {
        nome:"Sara",
        email:"sara@gmail.com"
      },
      {
        nome:"Paulo",
        email:"paulo@gmail.com"
      }
    ]
  }
}
