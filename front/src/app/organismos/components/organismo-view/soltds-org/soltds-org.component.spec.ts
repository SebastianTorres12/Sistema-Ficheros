import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoltdsOrgComponent } from './soltds-org.component';

describe('SoltdsOrgComponent', () => {
  let component: SoltdsOrgComponent;
  let fixture: ComponentFixture<SoltdsOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoltdsOrgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoltdsOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
