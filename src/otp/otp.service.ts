import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';
import { DrizzleService } from '../db';
import { otp } from '../db/schema/otp.db';
import { and, eq, gt } from 'drizzle-orm';

@Injectable()
export class OtpService {
  constructor(private db: DrizzleService) {}

  async create(createOtpDto: CreateOtpDto) {
    const existingOtp = await this.db.select().from(otp).where(
      and(
        eq(otp.mobile, createOtpDto.mobile),
        gt(otp.expiresAt, new Date()),
        eq(otp.used, false)
      )
    );
    if (existingOtp.length > 0) {
      throw new BadRequestException('پیامک به این شماره قبلا ارسال شده است');
    }

    const code = Math.floor(1000 + Math.random() * 9000).toString();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 1);
    const result = await this.db.insert(otp).values({
      mobile: createOtpDto.mobile,
      code,
      expiresAt,
    });
    return 'کد تایید با موفقیت ارسال شد';
  }

}
