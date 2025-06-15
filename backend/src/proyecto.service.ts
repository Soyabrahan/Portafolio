import { Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './entities/proyecto.entity';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
  ) {}

  create(createProyectoDto: CreateProyectoDto) {
    return 'This action adds a new proyecto';
  }

  findAll(): Promise<Proyecto[]> {
    return this.proyectoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} proyecto`;
  }

  update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return `This action updates a #${id} proyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
}
