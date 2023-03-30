import { Component, NgModule } from '@angular/core';

import {Empleado} from './models/empleado';

import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  empleadoArray: Empleado[] = [
    {id: 1, nombre: "Duvan", pais: "Colombia"},
    {id: 2, nombre: "Katy", pais:"España"},
    {id: 3, nombre: "Karina", pais: "USA"}
  ];

  seleccionarEmpleado: Empleado = new Empleado();


  addOrEdit(){

    if (this.seleccionarEmpleado.id === 0){
      this.seleccionarEmpleado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.seleccionarEmpleado);
    }
    
    this.seleccionarEmpleado = new Empleado();
  }

  openForEdit(empleado: Empleado){
    this.seleccionarEmpleado = empleado;
  }

  delete(){
    if(confirm('Estas seguro de querer eliminarlo')){
      this.empleadoArray = this.empleadoArray.filter(X => X != this.seleccionarEmpleado);
      this.seleccionarEmpleado = new Empleado();
    }
  }


}



