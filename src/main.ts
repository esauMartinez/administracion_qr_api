import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') || '*',
    credentials: process.env.NODE_ENV === 'production',
  });

  app.setGlobalPrefix('api-timbres');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    const logger = new Logger('Bootstrap');
    logger.log(`Server listening on port ${process.env.PORT ?? ''}`);
  })
  .catch((error) => {
    console.log(error);
  });
