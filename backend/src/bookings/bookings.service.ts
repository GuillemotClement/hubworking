import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookingEntity } from './entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookingDto: CreateBookingDto) {
    const booking = await this.prisma.booking.create({
      data: createBookingDto,
    });
    return new BookingEntity(booking);
  }

  async findAll() {
    const bookings = await this.prisma.booking.findMany();
    return bookings.map((booking) => new BookingEntity(booking));
  }

  async findOne(id: number) {
    const booking = await this.prisma.booking.findUnique({
      where: {
        id,
      },
    });
    return booking ? new BookingEntity(booking) : null;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.prisma.booking.update({
      where: {
        id,
      },
      data: updateBookingDto,
    });
    return new BookingEntity(booking);
  }

  async remove(id: number) {
    const booking = await this.prisma.booking.delete({
      where: {
        id,
      },
    });
    return new BookingEntity(booking);
  }
}
