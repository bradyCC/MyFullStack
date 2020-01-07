/**
 * @Author: licheng
 * @Date: 2020/1/7 10:54 上午
 * @Description:
 */
import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})
// 用户模型
export class User {
  @ApiProperty({ description: '用户名', example: 'user1' })
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: 'pass1' })
  @prop()
  password: string;
}
