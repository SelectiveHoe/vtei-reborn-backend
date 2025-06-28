import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PageEntity } from './entities/page.entity';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(PageEntity)
    private pageRepository: Repository<PageEntity>,
  ) {}

  async create(createPageDto: CreatePageDto): Promise<PageEntity> {
    const existingPage = await this.pageRepository.findOne({
      where: { id: createPageDto.id },
    });

    if (existingPage) {
      throw new ConflictException(
        `Page with ID ${createPageDto.id} already exists`,
      );
    }

    return await this.pageRepository.save(createPageDto);
  }

  async getContentById(id: number): Promise<PageEntity['content']> {
    const page = await this.findOne(id);
    return page.content;
  }

  async findOne(id: number): Promise<PageEntity> {
    const page = await this.pageRepository.findOne({ where: { id } });
    if (!page) {
      throw new NotFoundException(`Page with ID ${id} not found`);
    }
    return page;
  }

  async update(id: number, updatePageDto: UpdatePageDto): Promise<PageEntity> {
    const page = await this.findOne(id);
    const updatedPage = Object.assign(page, updatePageDto);
    return await this.pageRepository.save(updatedPage);
  }

  async remove(id: number): Promise<void> {
    const result = await this.pageRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Page with ID ${id} not found`);
    }
  }
}
