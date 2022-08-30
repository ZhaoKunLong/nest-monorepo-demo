import { Controller, Get } from '@nestjs/common';
import { SseService } from './sse.service';

@Controller()
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Get()
  getHello(): string {
    return this.sseService.getHello();
  }
}
