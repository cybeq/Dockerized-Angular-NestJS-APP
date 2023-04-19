import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {TaskModule} from "./modules/task/task.module";
import { UserModule } from './modules/user/user.module';

import {StatusFactory} from "./factories/StatusFactory";
import {Status, StatusSchema} from "./models/Status";


@Module({
  imports: [
      // docker
      MongooseModule.forRoot('mongodb://mongodb:27017/trans', {
          autoIndex: true,
      }),
      // manual
      // MongooseModule.forRoot('mongodb://mongodb:27017/trans', {
      //     autoIndex: true,
      // }),

            MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }]),
            TaskModule,
            UserModule,
  ],
  controllers: [AppController],
  providers:   [AppService, StatusFactory],
})
export class AppModule {}
