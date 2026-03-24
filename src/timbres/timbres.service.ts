import { Injectable } from '@nestjs/common';
import { CreateTimbreDto } from './dto/create-timbre.dto';
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

  async findAllByTerm(term: string) {
    const data = await this.timbreRepository.find({
      where: {
        guia: term,
      },
    });

    return data;
  }
}
