import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogproductComponent } from './dogproduct.component';

describe('DogproductComponent', () => {
  let component: DogproductComponent;
  let fixture: ComponentFixture<DogproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
