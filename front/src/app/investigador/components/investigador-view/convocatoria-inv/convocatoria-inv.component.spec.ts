import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaInvComponent } from './convocatoria-inv.component';

describe('ConvocatoriaInvComponent', () => {
  let component: ConvocatoriaInvComponent;
  let fixture: ComponentFixture<ConvocatoriaInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvocatoriaInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvocatoriaInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
