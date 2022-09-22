import { ExpressApplication } from './config/express';
import { CrudController } from './controllers/crud.controller';
import { Module } from './decorators/module.decorator';

class AppModule extends ExpressApplication {

  controllers: any[] = [
    new CrudController(),
  ]

  constructor() {
    super();
    this.addControllers(this.controllers);
  }

}

export { AppModule };
