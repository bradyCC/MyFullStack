/**
 * @Author: licheng
 * @Date: 2020/1/7 10:54 上午
 * @Description:
 */
import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from "./episode.module";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})
// 课程模型
export class Course {
  @ApiProperty({ description: '课程名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string;

  @ApiProperty({ description: '课时' })
  @arrayProp({ itemsRef: 'Episode' })
  episodes: Ref<Episode>[];
}
