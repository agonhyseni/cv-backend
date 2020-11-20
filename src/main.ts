
import * as dotenv from 'dotenv-safe';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as morgan from 'morgan';
// import * as helmet from 'helmet';
// import * as rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('combined'));
  // app.use(helmet());
  // app.enableCors({
  //   maxAge: 3600,
  //   credentials: true,
  //   origin: process.env.CORS_URL,
  // });
  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // );

  const options = new DocumentBuilder()
    .setTitle(`${process.env.FIRSTNAME} ${process.env.LASTNAME} - CV`)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('cv', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
