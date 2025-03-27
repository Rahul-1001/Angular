import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgreeBarComponent } from './progree-bar.component';

describe('ProgreeBarComponent', () => {
  let component: ProgreeBarComponent;
  let fixture: ComponentFixture<ProgreeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgreeBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgreeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
