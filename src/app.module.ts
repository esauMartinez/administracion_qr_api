import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimbresModule } from './timbres/timbres.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
      extra: {
        connectTimeout: 60000, // 60 seconds
        acquireTimeout: 60000,
        timeout: 60000,
      },
    }),
    TimbresModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
