import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainPanelComponent } from './mountain-panel.component';

describe('MountainPanelComponent', () => {
  let component: MountainPanelComponent;
  let fixture: ComponentFixture<MountainPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
