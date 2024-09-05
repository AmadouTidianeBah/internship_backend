import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import JwtGuard from './guards/jwt.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
      autoLoadEntities: true
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard
    }
  ]
})
export class AppModule {}
