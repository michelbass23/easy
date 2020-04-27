import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlePage } from './controle.page';

describe('ControlePage', () => {
  let component: ControlePage;
  let fixture: ComponentFixture<ControlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
