import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConvocatoriasComponent } from './list-convocatorias.component';

describe('ListConvocatoriasComponent', () => {
  let component: ListConvocatoriasComponent;
  let fixture: ComponentFixture<ListConvocatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListConvocatoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
