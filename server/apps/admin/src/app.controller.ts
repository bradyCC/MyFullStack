import { Controller, Get, Post, HttpCode, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 文件上传
  @Post('upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file): Promise<any> {
    return {
     url: `http://localhost:${process.env.ADMIN_PORT}/uploads/${file.filename}`,
    };
  }
}
