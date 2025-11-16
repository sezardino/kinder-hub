import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BaseRepository {
  constructor(protected readonly prisma: PrismaService) {}
}
