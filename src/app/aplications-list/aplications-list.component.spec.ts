import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationsListComponent } from './aplications-list.component';

describe('AplicationsListComponent', () => {
  let component: AplicationsListComponent;
  let fixture: ComponentFixture<AplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicationsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
