import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // 创建Nest应用程序实例
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 处理跨域
  app.enableCors();

  // 静态文件托管
  app.useStaticAssets('uploads', { prefix: '/uploads' });

  // swagger配置
  const options = new DocumentBuilder()
    .setTitle('Nodejs + Vuejs 全栈项目-后台管理API')
    .setDescription('供后台管理界面调用的服务端API')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // 监听端口
  const PORT = process.env.ADMIN_PORT || 3002;
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`);
}
bootstrap();
