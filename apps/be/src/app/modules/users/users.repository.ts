import { BaseRepository } from '@/app/infrastructure/repository/base.repository';
import { Prisma } from '@/generated/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository extends BaseRepository {
  async create(
    data: Prisma.UserCreateInput,
    client: Prisma.TransactionClient = this.prisma
  ) {
    return client.user.create({ data });
  }

  async findByEmail(
    email: string,
    client: Prisma.TransactionClient = this.prisma
  ) {
    return client.user.findUnique({ where: { email } });
  }

  async findById(id: string, client: Prisma.TransactionClient = this.prisma) {
    return client.user.findUnique({ where: { id } });
  }
}
