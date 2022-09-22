import { Controller, Get } from "../decorators/controller.decorator";
import { CrudService } from "../services/crud.service";

@Controller('/crud')
class CrudController {

  get = {
    url: '/get',
    service: (query: any, body: any) => {
      this.getData(query, body);
    },
    validate: {},
  }

  @Get('/get')
  async getData(query: any, _body: any) {
    //call service
    const crudService = new CrudService();
    crudService.doSomething(query);
  }

}

export { CrudController };