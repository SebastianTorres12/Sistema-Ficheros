import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudInvComponent } from './solicitud-inv.component';

describe('SolicitudInvComponent', () => {
  let component: SolicitudInvComponent;
  let fixture: ComponentFixture<SolicitudInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
