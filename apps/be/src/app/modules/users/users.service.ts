import { PrismaService } from '@/app/infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private users: UsersRepository) {}

  async createUser(dto: any, tx?: PrismaService) {
    return this.users.create(dto, tx);
  }
}
