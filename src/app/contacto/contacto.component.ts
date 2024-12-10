import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  model = { name: '', email: '', message: '' };

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar el formulario, como una llamada a un servicio
    console.log('Formulario enviado', this.model);
  }
}
