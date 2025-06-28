import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PasswordAuthGuard } from '../auth/guards/password-auth.guard';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  @UseGuards(PasswordAuthGuard)
  create(@Body() createPageDto: CreatePageDto) {
    return this.pagesService.create(createPageDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagesService.getContentById(+id);
  }

  @Patch(':id')
  @UseGuards(PasswordAuthGuard)
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pagesService.update(+id, updatePageDto);
  }

  @Delete(':id')
  @UseGuards(PasswordAuthGuard)
  remove(@Param('id') id: string) {
    return this.pagesService.remove(+id);
  }
}
