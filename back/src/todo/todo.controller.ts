import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.todoService.delete(+id);
  }

  @Put(':id')
  toggleCompletedStatus(@Param('id') id: string) {
    return this.todoService.toggleCompletedStatus(+id);
  }
}
