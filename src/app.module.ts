import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersController } from './foo/controllers/controllers.controller';
import { FooController } from './controllers/foo/foo.controller';
import { CatModule } from './cat/cat.module';
import { CatModule } from './cat/cat/cat.module';
import { CatModule } from './cat/cat/cat.module';
import { CatController } from './cat/cat.controller';
import { FooController } from './controllers/foo/foo.controller';

@Module({
  imports: [CatModule],
  controllers: [AppController, ControllersController, FooController, CatController],
  providers: [AppService],
})
export class AppModule {}
