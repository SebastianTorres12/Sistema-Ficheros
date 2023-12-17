import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGpoInvInvComponent } from './list-gpo-inv-inv.component';

describe('ListGpoInvInvComponent', () => {
  let component: ListGpoInvInvComponent;
  let fixture: ComponentFixture<ListGpoInvInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGpoInvInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGpoInvInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
