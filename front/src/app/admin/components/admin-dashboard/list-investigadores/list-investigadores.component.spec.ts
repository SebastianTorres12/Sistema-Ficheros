import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvestigadoresComponent } from './list-investigadores.component';

describe('ListInvestigadoresComponent', () => {
  let component: ListInvestigadoresComponent;
  let fixture: ComponentFixture<ListInvestigadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListInvestigadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
