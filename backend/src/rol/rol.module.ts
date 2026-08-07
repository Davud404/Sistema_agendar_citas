import { Module } from "@nestjs/common";
import { RolController } from "./rol.controller";

@Module({
  imports: [],
  controllers: [RolController],
  providers: [],
})
export class RolModule {

}