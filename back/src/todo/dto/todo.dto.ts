import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateTodoDto implements Prisma.TodoCreateInput {
  @IsString()
  value: string;
}
