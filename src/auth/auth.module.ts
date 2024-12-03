import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { OtpModule } from 'src/otp/otp.module';
import { DrizzleModule } from '../db/drizzle.module';

@Module({
  imports: [OtpModule, DrizzleModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
