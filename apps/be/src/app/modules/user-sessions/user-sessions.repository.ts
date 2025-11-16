import { BaseRepository } from '@/app/infrastructure/repository/base.repository';
import { Prisma } from '@/generated/prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserSessionsRepository extends BaseRepository {
  async create(
    data: Prisma.UserSessionCreateInput,
    client: Prisma.TransactionClient = this.prisma
  ) {
    return client.userSession.create({ data });
  }

  async deleteById(id: string, client: Prisma.TransactionClient = this.prisma) {
    return client.userSession.delete({ where: { id } });
  }

  async findByTokenHash(
    hash: string,
    client: Prisma.TransactionClient = this.prisma
  ) {
    return client.userSession.findFirst({
      where: { refreshToken: hash },
    });
  }

  async deleteAllOfUser(
    userId: string,
    client: Prisma.TransactionClient = this.prisma
  ) {
    return client.userSession.deleteMany({
      where: { userId },
    });
  }
}
