import { Working } from 'generated/prisma';

export class WorkingEntity implements Working {
  id: number;
  title: string;
  image: string;
  localisation: string;
  describ: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;

  constructor(working: Working) {
    this.id = working.id;
    this.title = working.title;
    this.image = working.image;
    this.localisation = working.localisation;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.describ = working.describ;
    this.createdAt = working.createdAt;
    this.updatedAt = working.updatedAt;
    this.deletedAt = working.deletedAt;
  }
}
