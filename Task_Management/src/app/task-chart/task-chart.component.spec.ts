import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChartComponent } from './task-chart.component';

describe('TaskChartComponent', () => {
  let component: TaskChartComponent;
  let fixture: ComponentFixture<TaskChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskChartComponent]
    });
    fixture = TestBed.createComponent(TaskChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
