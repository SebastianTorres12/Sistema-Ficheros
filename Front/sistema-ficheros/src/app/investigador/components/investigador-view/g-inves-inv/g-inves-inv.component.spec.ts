import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GInvesInvComponent } from './g-inves-inv.component';

describe('GInvesInvComponent', () => {
  let component: GInvesInvComponent;
  let fixture: ComponentFixture<GInvesInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GInvesInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GInvesInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
