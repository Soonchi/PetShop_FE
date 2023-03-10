import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotificationComponent } from './dialog-notification.component';

describe('DialogNotificationComponent', () => {
  let component: DialogNotificationComponent;
  let fixture: ComponentFixture<DialogNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
