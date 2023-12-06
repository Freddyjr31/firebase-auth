import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePanelComponent } from './home-panel.component';

describe('HomePanelComponent', () => {
  let component: HomePanelComponent;
  let fixture: ComponentFixture<HomePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePanelComponent]
    });
    fixture = TestBed.createComponent(HomePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
