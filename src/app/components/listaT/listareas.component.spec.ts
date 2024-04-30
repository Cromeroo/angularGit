import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListareasComponent } from './listareas.component';

describe('ListareasComponent', () => {
  let component: ListareasComponent;
  let fixture: ComponentFixture<ListareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
