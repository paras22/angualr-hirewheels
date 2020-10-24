import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { VehicleDetail } from 'src/app/shared/models/vehicledetail';

@Component({
  selector: 'app-available-vehicle',
  templateUrl: './available-vehicle.component.html',
  styleUrls: ['./available-vehicle.component.scss']
})
export class AvailableVehicleComponent implements OnChanges {

  @Input()
  availableVehicles: VehicleDetail[];

  @Output()
  vehicleBooking: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
    this.sortVehicleByCost();
  }

  sortVehicleByCost() {
    if (this.availableVehicles?.length > 1) {
      this.availableVehicles = this.availableVehicles.
        sort((a, b) => (a.CostPerHour > b.CostPerHour) ? 1 : ((b.CostPerHour > a.CostPerHour) ? -1 : 0));
    }
  }

  bookVehicle(vehicleID: number): void {
    this.vehicleBooking.emit(vehicleID);
  }

}
