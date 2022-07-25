import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamaludeComponent } from './yamalude.component';

describe('YamaludeComponent', () => {
  let component: YamaludeComponent;
  let fixture: ComponentFixture<YamaludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamaludeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamaludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
