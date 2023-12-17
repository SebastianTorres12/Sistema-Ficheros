import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpoInvInvComponent } from './gpo-inv-inv.component';

describe('GpoInvInvComponent', () => {
  let component: GpoInvInvComponent;
  let fixture: ComponentFixture<GpoInvInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpoInvInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GpoInvInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
