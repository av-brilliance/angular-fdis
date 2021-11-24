import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePerformersComponent } from './create-performers.component';

describe('CreatePerformersComponent', () => {
  let component: CreatePerformersComponent;
  let fixture: ComponentFixture<CreatePerformersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePerformersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePerformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
