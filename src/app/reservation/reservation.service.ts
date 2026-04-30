import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  //CRUD operations

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    console.log("Added reservation: ", this.reservations);
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    if (index >= 0 && index < this.reservations.length) {
      this.reservations[index] = updatedReservation;
      console.log("Updated reservation: ", updatedReservation);
    }
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    if (index >= 0 && index < this.reservations.length) {
      this.reservations.splice(index, 1);
      console.log("Deleted reservation with ID: ", id);
    }
  }
}
