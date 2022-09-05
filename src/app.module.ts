import { Module } from '@nestjs/common';
import { UserModule } from './api/user.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
