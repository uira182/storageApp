import { Component } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaUsuarios: Usuario[] = [];

  constructor(private storageService: StorageService) {}

  async buscarUsuario(){
    this.listaUsuarios = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuario();
  }

  async excluirCadastro(email: string){
    await this.storageService.remove(email);
    this.buscarUsuario();
  }
}
