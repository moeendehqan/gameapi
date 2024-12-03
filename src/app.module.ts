import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtpModule } from './otp/otp.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [OtpModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
