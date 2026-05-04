import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  //Constructor is getting loaded before ngOnInit, so we can load reservations from localStorage here

  constructor() {
    // Load reservations from localStorage if available
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  //CRUD operations

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    if (index >= 0 && index < this.reservations.length) {
      this.reservations[index] = updatedReservation;
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
      console.log("Updated reservation: ", updatedReservation);
    }
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    if (index >= 0 && index < this.reservations.length) {
      this.reservations.splice(index, 1);
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
      console.log("Deleted reservation with ID: ", id);
    }
  }
}
