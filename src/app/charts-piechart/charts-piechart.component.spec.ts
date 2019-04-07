import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsPiechartComponent } from './charts-piechart.component';

describe('ChartsPiechartComponent', () => {
  let component: ChartsPiechartComponent;
  let fixture: ComponentFixture<ChartsPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
