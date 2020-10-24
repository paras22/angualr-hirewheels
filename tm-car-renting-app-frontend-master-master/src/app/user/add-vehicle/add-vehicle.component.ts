import { Component, OnInit } from '@angular/core';
import { VehicleProperty, CarSubCategory, BikeSubCategory, AvailableLocation } from 'src/app/shared/models/vehicleproperty';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { VehicleService } from '../services/vehicle.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  addVehicleForm: FormGroup;
  userData = new User();
  errorStatusMessage = '';
  successStatusMessage = '';
  vehicleSubCategory: VehicleProperty[];
  availableLocation: VehicleProperty[];

  vehicleFuelType: VehicleProperty[] = [
    {
      name: 'Petrol',
      value: '1'
    },
    {
      name: 'Diesel',
      value: '2'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private authService: AuthService) {
    this.availableLocation = AvailableLocation;
  }

  ngOnInit(): void {
    this.initializeAddVehicleForm();

    this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
  }

  initializeAddVehicleForm() {
    this.addVehicleForm = this.fb.group({
      Modelno: ['', Validators.required],
      VehicleNumber: ['', Validators.required],
      category: ['', Validators.required],
      Fuletype: ['', Validators.required],
      SubId: ['', Validators.required],
      color: ['', Validators.required],
      Locationid: ['', Validators.required],
      carImage: ['', Validators.required]
    });
  }

  get addVehicleFormControl() {
    return this.addVehicleForm.controls;
  }


  onAddVehicleFormSubmit() {

    this.successStatusMessage = '';
    this.errorStatusMessage = '';

    if (this.addVehicleForm.valid) {
      const vehicleDetails = this.setVehicleDetails();
      this.vehicleService.addVehicles(vehicleDetails).pipe()
        .subscribe((data: any) => {
          this.successStatusMessage = data.message;
        }, (response: any) => {
          this.errorStatusMessage = response.error.message;
        });
    }
  }

  setVehicleDetails(): Vehicle {
    const vehicle = new Vehicle();

    vehicle.Modelno = this.addVehicleForm.value.Modelno;
    vehicle.VehicleNumber = this.addVehicleForm.value.VehicleNumber;
    vehicle.SubId = this.addVehicleForm.value.SubId.value;
    vehicle.carImage = this.addVehicleForm.value.carImage;
    vehicle.color = this.addVehicleForm.value.color;
    vehicle.Fuletype = this.addVehicleForm.value.Fuletype.value;
    vehicle.Locationid = this.addVehicleForm.value.Locationid.value;
    vehicle.userId = this.userData.userId;
    return vehicle;
  }
}
