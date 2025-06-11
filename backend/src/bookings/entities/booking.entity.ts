import { Booking } from 'generated/prisma';

export class BookingEntity implements Booking {
  id: number;
  userId: number;
  workingId: number;

  constructor(booking: Booking) {
    this.id = booking.id;
    this.userId = booking.userId;
    this.workingId = booking.workingId;
  }
}
