import { Injectable } from '@nestjs/common';
import { UserSessionsRepository } from './user-sessions.repository';

@Injectable()
export class UserSessionsService {
  constructor(private userSessionsRepository: UserSessionsRepository) {}

  createSession(data: any) {
    return this.userSessionsRepository.create(data);
  }

  findByTokenHash(hash: string) {
    return this.userSessionsRepository.findByTokenHash(hash);
  }

  deleteSession(id: string) {
    return this.userSessionsRepository.deleteById(id);
  }

  deleteAll(userId: string) {
    return this.userSessionsRepository.deleteAllOfUser(userId);
  }
}
