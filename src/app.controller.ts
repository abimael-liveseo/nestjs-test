import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Fruit } from './Fruit.class';

@Controller('exemplo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('fruits')
  getFruits() {
    const fruit = new Fruit();
    return fruit.get();
  }
}
