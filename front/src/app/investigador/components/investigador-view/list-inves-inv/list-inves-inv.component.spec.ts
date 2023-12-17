import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvesInvComponent } from './list-inves-inv.component';

describe('ListInvesInvComponent', () => {
  let component: ListInvesInvComponent;
  let fixture: ComponentFixture<ListInvesInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListInvesInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInvesInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
