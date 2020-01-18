import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db/db.module';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';


@Module({
  imports: [
    DbModule,
    MulterModule.register({ dest: 'uploads' }),
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
