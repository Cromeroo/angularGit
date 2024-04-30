import { Component, OnInit } from '@angular/core';
import { tareasinterface } from '../../core/interface/ListaTareas.interface';
import { ListaTcomponent } from '../../components/listaT/listareas.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [ListaTcomponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
})
export class TareasComponent implements OnInit {
  misTareas: tareasinterface[] = [];
  titulo: string = 'Lista de Tareas';
  columnas: string[] = [];
  informaciontarea: any;
  infotarea: any;
  ngOnInit(): void {
    this.misTareas = [
      {
        nombre: 'Tarea 1',
        prioridad: 2,
        completada: true,
      },
      {
        nombre: 'Tarea 2',
        prioridad: 4,
        completada: true,
      },
      {
        nombre: 'Tarea 3',
        prioridad: 2,
        completada: true,
      },
      {
        nombre: 'Tarea 4',
        prioridad: 2,
        completada: true,
      },
    ];
    console.log(this.misTareas);
  }
  recibirInformacion(misTarea: tareasinterface) {
    console.log('Se está imprimiendo:', this.informaciontarea);
    Swal.fire({
      title: 'Información enviada',
      html: `
      <div>
        <p><strong>SKU:</strong> ${misTarea.nombre}</p>
      </div>
    `,
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  }

  async recibirTarea() {
    const { value: formValues } = await Swal.fire({
      title: 'Tarea Nueva',
      html:
        '<input id="nombre" class="swal2-input" placeholder="Nombre">' +
        '<input id="prioridad" class="swal2-input" placeholder="Prioridad 1-5">' +
        '<select id="cumplido" class="swal2-select">' +
        '  <option value="">¿Cumplía?</option>' +
        '  <option value="Si">Sí</option>' +
        '  <option value="No">No</option>' +
        '</select>',
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById('nombre') as HTMLInputElement).value,
          (document.getElementById('prioridad') as HTMLInputElement).value,
          (document.getElementById('cumplido') as HTMLInputElement).value,
        ];
      },
    });

    if (formValues) {
      const tarea: tareasinterface = {
        nombre: formValues[0],
        prioridad: formValues[1],
        completada: formValues[2],
      };

      console.log('qué sale', formValues);
      this.misTareas.push(tarea);
      Swal.fire(JSON.stringify(formValues));
    }
  }
}
