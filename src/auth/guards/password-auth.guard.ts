import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class PasswordAuthGuard implements CanActivate {
  private readonly adminPassword: string | undefined;

  constructor(private configService: ConfigService) {
    this.adminPassword = this.configService.get<string>('ADMIN_PASSWORD');

    if (!this.adminPassword) {
      console.warn('WARNING: ADMIN_PASSWORD not set in environment variables');
    }
  }

  canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const providedPassword = request.headers['x-admin-password'] as string;

    if (!this.adminPassword || !providedPassword) {
      throw new UnauthorizedException('Authentication required');
    }

    if (this.adminPassword !== providedPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    return Promise.resolve(true);
  }
}
