import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Episode } from "@libs/db/models/episode.module";
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
  constructor(@InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>) {}

  // 列表配置项
  @Get('option')
  option() {
    return {
      title: '课时管理',
      column: [
        { label: '课时名称', prop: 'name' },
        // { label: '文件', prop: 'file' },
      ],
    }
  }
}
