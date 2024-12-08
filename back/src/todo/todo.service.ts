import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.todo.findMany();
  }

  async getById(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id,
      },
    });

    if (!todo) throw new NotFoundException(`Not found with id: ${id}`);

    return todo;
  }

  async create(dto: CreateTodoDto) {
    return await this.prisma.todo.create({
      data: {
        ...dto,
      },
    });
  }

  async delete(id: number) {
    const todo = await this.getById(id);

    if (!todo) throw new NotFoundException(`Not found with id: ${id}`);
    
    return await this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }

  async toggleCompletedStatus(id: number) {
    const todo = await this.getById(id);

    if (!todo) throw new NotFoundException(`Not found with id: ${id}`);

    return await this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        isCompleted: true,
      },
    });
  }
}
