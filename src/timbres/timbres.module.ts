import { Module } from '@nestjs/common';
import { TimbresService } from './timbres.service';
import { TimbresController } from './timbres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timbre } from './entities/timbre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Timbre])],
  controllers: [TimbresController],
  providers: [TimbresService],
})
export class TimbresModule {}
