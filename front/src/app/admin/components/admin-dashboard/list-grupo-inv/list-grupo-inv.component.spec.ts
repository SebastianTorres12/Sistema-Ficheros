import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrupoInvComponent } from './list-grupo-inv.component';

describe('ListGrupoInvComponent', () => {
  let component: ListGrupoInvComponent;
  let fixture: ComponentFixture<ListGrupoInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGrupoInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGrupoInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
