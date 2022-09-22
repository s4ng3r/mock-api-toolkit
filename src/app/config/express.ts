import express, { Express, NextFunction, Request, Response, Router } from 'express';

class ExpressApplication {

  private app: Express;
  private router: Router;

  constructor() {
    this.app = express();
    this.router = express.Router();

    this.app.use(express.json());
  }

  public async listen(port: number): Promise<void> {
    this.app.listen(port, () => {
      console.log(`Server listening on port:${port} ...`);
    });
  }

  public middleware(func: any): void {
    this.app.use(func);
  }

  public addControllers(controllers: any[]) {
    for (const controller of controllers) {
      if (controller.get) {
        this.router.get(controller.get.url,
          async (req: Request, res: Response, _next: NextFunction) => {
            await controller.getData(req.query, req.body);
            res.end();
          });
      }
    }
    this.app.use(this.router);
  }
}

export { ExpressApplication };
