/**
 * @Author: licheng
 * @Date: 2020/1/7 10:54 上午
 * @Description:
 */
import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Course } from './course.module';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})
// 课时模型
export class Episode {
  @ApiProperty({ description: '课时名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '文件' })
  @prop()
  file: string;

  @ApiProperty({ description: '课程' })
  @prop({ ref: 'Course' })
  course: Ref<Course>
}
