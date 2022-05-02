import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

 //i18nSelect 
 nombre: string = 'Fernando';
 genero: string = 'masculino';

 invitacionMapa = {
   'masculino': 'invitarlo',
   'femenino': 'invitarla'
 }

 //i18nPlural
 clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];

 clientesMapa = {
   '=0': 'no tenemos ningún cliente esperando',
   '=1': 'tenemos un cliente esperando.',
   'other': 'tenemos # clientes esperando'
 }

 cambiarCliente() {
  this.nombre = 'Maria';
  this.genero = 'femenino'
 }

 borrarCliente() {
  this.clientes.splice(0, 1);
 }

 //KeyValue Pipe
 persona = {
   nombre: 'Fernando',
   edad: 35, 
   direccion: 'Ottawa, Canadá'
 }

 //Json Pipe
 heroes = [
   {
     nombre: 'Superman',
     vuela: true
   },
   {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
 ];

}
