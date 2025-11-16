import { Module } from '@nestjs/common';
import { UserSessionsRepository } from './user-sessions.repository';
import { UserSessionsService } from './user-sessions.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UserSessionsService, UserSessionsRepository],
  exports: [UserSessionsService, UserSessionsRepository],
})
export class UserSessionsModule {}
