import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorSystemDashboardComponent } from './sensor-system-dashboard.component';

describe('SensorSystemDashboardComponent', () => {
  let component: SensorSystemDashboardComponent;
  let fixture: ComponentFixture<SensorSystemDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorSystemDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorSystemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
