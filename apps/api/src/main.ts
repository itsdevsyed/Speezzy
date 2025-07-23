import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'; // Import FastifyAdapter and NestFastifyApplication
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter() // Use the FastifyAdapter
  );
  await app.listen(3000); // Or your desired port
}
bootstrap();
