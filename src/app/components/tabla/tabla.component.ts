import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
  output,
} from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';
import { ProductoInterface } from '../../core/interface/producto.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() titulo: string = '';
  @Input() columnas: string[] = [];

  @Output() oninformation: EventEmitter<any> = new EventEmitter<any>();
  @Output() onTinformation: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    console.log('Personas en el componente hijo', this.data);
  }

  formatearNombreDeColumnas(columna: string): string {
    // Dividir el nombre por mayúsculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  }

  isFecha(value: any): boolean {
    return value instanceof Date;
  }

  enviarInformacion(data: any) {
    this.oninformation.emit(data);
  }
}
