import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/models/course.module';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from "@typegoose/typegoose";

@Crud({
  model: Course,
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  // 模型注入
  constructor(@InjectModel(Course) private readonly model: ReturnModelType<typeof Course>) {}
}
