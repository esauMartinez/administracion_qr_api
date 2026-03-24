import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimbresService } from './timbres.service';
import { CreateTimbreDto } from './dto/create-timbre.dto';
import { UpdateTimbreDto } from './dto/update-timbre.dto';

@Controller('timbres')
export class TimbresController {
  constructor(private readonly timbresService: TimbresService) {}

  @Post()
  create(@Body() createTimbreDto: CreateTimbreDto) {
    return this.timbresService.create(createTimbreDto);
  }

  @Get()
  findAll() {
    return this.timbresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timbresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimbreDto: UpdateTimbreDto) {
    return this.timbresService.update(+id, updateTimbreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timbresService.remove(+id);
  }
}
