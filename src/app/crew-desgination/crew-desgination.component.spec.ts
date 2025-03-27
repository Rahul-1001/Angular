import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDesginationComponent } from './crew-desgination.component';

describe('CrewDesginationComponent', () => {
  let component: CrewDesginationComponent;
  let fixture: ComponentFixture<CrewDesginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewDesginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewDesginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
