import { Controller, Get } from '@nestjs/common';
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

  // 列表配置项
  @Get('option')
  option() {
    return {
      title: '课程管理',
      column: [
        { label: '课程名称', prop: 'name', sortable: true, search: true, regex: true, row: true },
        { label: '课程封面图', prop: 'cover', type: 'upload', width: 120, listType: 'picture-img', action: 'upload' },
      ],
      searchMenuSpan: 3,
    }
  }
}
