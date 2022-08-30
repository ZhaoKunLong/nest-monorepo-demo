import { NestFactory } from '@nestjs/core';
import { SseModule } from './sse.module';

async function bootstrap() {
  const app = await NestFactory.create(SseModule);
  await app.listen(3000);
}
bootstrap();
