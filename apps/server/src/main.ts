import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.NEST_PORT || 3001;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Airbnb API')
    .setDescription('The Airbnb API description')
    .setVersion('1.0')
    .addTag('airbnb')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
