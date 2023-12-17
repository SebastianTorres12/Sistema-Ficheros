import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrganismosComponent } from './list-organismos.component';

describe('ListOrganismosComponent', () => {
  let component: ListOrganismosComponent;
  let fixture: ComponentFixture<ListOrganismosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOrganismosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOrganismosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
