import { Working } from 'generated/prisma';

export class WorkingEntity implements Working {
  id: number;
  title: string;
  image: string;
  localisation: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;

  constructor(working: Working) {
    this.id = working.id;
    this.title = working.title;
    this.image = working.image;
    this.localisation = working.localisation;
    this.createdAt = working.createdAt;
    this.updatedAt = working.updatedAt;
    this.deletedAt = working.deletedAt;
  }
}
