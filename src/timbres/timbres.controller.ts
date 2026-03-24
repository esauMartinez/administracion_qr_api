import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { TimbresService } from './timbres.service';
import { CreateTimbreDto } from './dto/create-timbre.dto';

@Controller('timbres')
export class TimbresController {
  constructor(private readonly timbresService: TimbresService) {}

  @Post()
  create(@Body() createTimbreDto: CreateTimbreDto) {
    return this.timbresService.create(createTimbreDto);
  }

  @Get()
  findAllByTerm(@Query() params: { term: string }) {
    return this.timbresService.findAllByTerm(params.term);
  }
}
