import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCarsDetailComponent } from './compare-cars-detail.component';

describe('CompareCarsDetailComponent', () => {
  let component: CompareCarsDetailComponent;
  let fixture: ComponentFixture<CompareCarsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCarsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
