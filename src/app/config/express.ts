import express, { Express, NextFunction, Request, Response, Router } from 'express';
import { ENDPOINTS } from '../controllers/endpoints.controller';
import { IHttpType } from '../interfaces/controller.interface';

class ExpressApplication {

  private app: Express;
  private router: Router;

  constructor() {
    this.app = express();
    this.router = express.Router();

    this.app.use(express.json());

    this.addEndpoints();
    this.app.use(this.router);
  }

  public async listen(port: number): Promise<void> {
    this.app.listen(port, () => {
      console.log(`Server listening on port:${port} ...`);
    });
  }

  public middleware(func: any): void {
    this.app.use(func);
  }

  private addEndpoints() {
    for (const endpoint of ENDPOINTS) {
      if (endpoint.http_type === IHttpType.HTTP_GET) {
        this.router.get(endpoint.url,
          async (req: Request, res: Response, _next: NextFunction) => {
            console.log('req.query: ', req.query);
            console.log('req.body: ', req.body);
            res.status(200);
            res.send(endpoint.data);
          });
      }
      if (endpoint.http_type === IHttpType.HTTP_POST) {
        this.router.post(endpoint.url,
          async (req: Request, res: Response, _next: NextFunction) => {
            console.log('req.query: ', req.query);
            console.log('req.body: ', req.body);
            res.status(200);
            res.send(endpoint.data);
          });
      }
      if (endpoint.http_type === IHttpType.HTTP_PUT) {
        this.router.put(endpoint.url,
          async (req: Request, res: Response, _next: NextFunction) => {
            console.log('req.query: ', req.query);
            console.log('req.body: ', req.body);
            res.status(200);
            res.send(endpoint.data);
          });
      }
      if (endpoint.http_type === IHttpType.HTTP_DELETE) {
        this.router.delete(endpoint.url,
          async (req: Request, res: Response, _next: NextFunction) => {
            console.log('req.query: ', req.query);
            console.log('req.body: ', req.body);
            res.status(200);
            res.send(endpoint.data);
          });
      }
    }
  }
}

export { ExpressApplication };
