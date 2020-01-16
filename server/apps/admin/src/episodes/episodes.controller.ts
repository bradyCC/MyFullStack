import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Episode } from "@libs/db/models/episode.module";
import { Course} from "@libs/db/models/course.module";
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from "@typegoose/typegoose";

@Crud({
  model: Episode,
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
  // 模型注入
  constructor(
    @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
    @InjectModel(Course) private readonly courseModel: ReturnModelType<typeof Course>
  ) {}

  // 列表配置项
  @Get('option')
  async option() {
    const courses = (await this.courseModel.find()).map(item => ({ label: item.name, value: item._id }));
    return {
      title: '课时管理',
      // translate: false,
      column: [
        { label: '所属课程', prop: 'course', type: 'select', dicData: courses, row: true },
        { label: '课时名称', prop: 'name', span: 24, },
        { label: '视频文件', prop: 'file', type: 'upload', width: 120, listType: 'picture-img', action: '/upload' },
      ],
    }
  }
}
