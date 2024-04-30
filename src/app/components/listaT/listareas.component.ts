import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
  output,
} from '@angular/core';
import { tareasinterface } from '../../core/interface/ListaTareas.interface';
@Component({
  selector: 'app-listareas',
  standalone: true,
  imports: [],
  templateUrl: './listareas.component.html',
  styleUrl: './listareas.component.css',
})
export class ListaTcomponent implements OnInit {
  @Input() misTareas: tareasinterface[] = [];
  @Input() titulo: string = '';
  @Output() oninformation: EventEmitter<any> = new EventEmitter<any>();
  @Output() onTinformation: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    console.log('Personas en el componente hijo', this.misTareas);
  }
  enviarInformacion(data: any) {
    this.oninformation.emit(data);
  }
  enviarTarea(tarea: any) {
    this.onTinformation.emit(tarea);
  }
}
