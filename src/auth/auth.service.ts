import { Injectable } from '@nestjs/common';
import { OtpService } from 'src/otp/otp.service';
import { DrizzleService } from 'src/db/drizzle.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { eq, and } from 'drizzle-orm';
import { otp } from '../db/schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly otpService: OtpService,
    private readonly db: DrizzleService
  ) {}


  async login(loginAuthDto: LoginAuthDto) {
    const { mobile, code, name } = loginAuthDto;
    const otpRecord = await this.db.select().from(otp).where(
      and(
        eq(otp.mobile, mobile),
        eq(otp.code, code),
        eq(otp.status, 'active')
      )
    );
    return `This action returns all auth`;
  }

  profile() {
    return `This action returns all profile`;
  }
}
