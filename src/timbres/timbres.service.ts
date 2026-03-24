import { Injectable } from '@nestjs/common';
import { CreateTimbreDto } from './dto/create-timbre.dto';
import { UpdateTimbreDto } from './dto/update-timbre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Timbre } from './entities/timbre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TimbresService {
  constructor(
    @InjectRepository(Timbre)
    private readonly timbreRepository: Repository<Timbre>,
  ) {}

  async create(createTimbreDto: CreateTimbreDto) {
    const timbre = this.timbreRepository.create(createTimbreDto);

    await this.timbreRepository.save(timbre);

    return { message: 'Datos guardados', timbre };
  }

  findAll() {
    return `This action returns all timbres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timbre`;
  }

  update(id: number, updateTimbreDto: UpdateTimbreDto) {
    return `This action updates a #${id} timbre`;
  }

  remove(id: number) {
    return `This action removes a #${id} timbre`;
  }
}
