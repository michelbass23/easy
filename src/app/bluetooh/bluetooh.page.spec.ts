import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BluetoohPage } from './bluetooh.page';

describe('BluetoohPage', () => {
  let component: BluetoohPage;
  let fixture: ComponentFixture<BluetoohPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluetoohPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BluetoohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
