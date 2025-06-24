import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PageEntity } from './entities/page.entity';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(PageEntity)
    private pageRepository: Repository<PageEntity>,
  ) {}

  async create(createPageDto: CreatePageDto): Promise<PageEntity> {
    const page = this.pageRepository.create(createPageDto);
    return await this.pageRepository.save(page);
  }

  async findAll(paginationDto: PaginationDto = {}): Promise<{
    data: PageEntity[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [data, total] = await this.pageRepository.findAndCount({
      order: { id: 'DESC' },
      take: limit,
      skip,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
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
