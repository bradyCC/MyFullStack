import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.module';
import { Course } from './models/course.module';
import { Episode } from "./models/episode.module";

// 全局定义模型
const models = TypegooseModule.forFeature([User, Course, Episode]);

@Global()
@Module({
  imports: [
    // 链接数据库
    TypegooseModule.forRoot('mongodb://localhost/myfullstack', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
