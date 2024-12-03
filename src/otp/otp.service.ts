import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
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
    
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 5);
    const result = await this.db.insert(otp).values({
      mobile: createOtpDto.mobile,
      code,
      expiresAt,
    });
    return 'This action adds a new otp';
  }

  findAll() {

    return `This action returns all otp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otp`;
  }

  update(id: number, updateOtpDto: UpdateOtpDto) {
    return `This action updates a #${id} otp`;
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }
}
