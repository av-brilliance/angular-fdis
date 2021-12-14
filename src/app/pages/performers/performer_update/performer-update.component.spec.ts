import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformerUpdateComponent } from './performer-update.component';

describe('PerformerUpdateComponent', () => {
  let component: PerformerUpdateComponent;
  let fixture: ComponentFixture<PerformerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
