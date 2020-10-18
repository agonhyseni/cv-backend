import * as dotenv from 'dotenv-safe';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle(`${process.env.FIRSTNAME} ${process.env.LASTNAME} - CV`)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('cv', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
