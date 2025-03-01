import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PasswordAuthGuard } from './guards/password-auth.guard';

@Module({
  imports: [ConfigModule],
  providers: [PasswordAuthGuard],
  exports: [PasswordAuthGuard],
})
export class AuthModule {}
