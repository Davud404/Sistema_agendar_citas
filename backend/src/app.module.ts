import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolModule } from './rol/rol.module';
import { CuentaModule } from './cuenta/cuenta.module';
import { RolController } from './rol/rol.controller';
import { CuentaController } from './cuenta/cuenta.controller';

@Module({
  imports: [RolModule, CuentaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
