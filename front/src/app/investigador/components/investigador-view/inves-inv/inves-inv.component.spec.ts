import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesInvComponent } from './inves-inv.component';

describe('InvesInvComponent', () => {
  let component: InvesInvComponent;
  let fixture: ComponentFixture<InvesInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvesInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvesInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
