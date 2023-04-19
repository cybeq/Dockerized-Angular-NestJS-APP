import {HttpAdapterHost, NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {UnhandledExceptionFilter} from "./common/exceptions/filters/UnhandledExceptionFilter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*'
  });
  const  httpAdapter  = app.get(HttpAdapterHost);
  app.useGlobalFilters(new UnhandledExceptionFilter(httpAdapter));

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
