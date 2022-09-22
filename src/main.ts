import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = new AppModule();

  await app.listen(3000);
}

bootstrap();