import { Module } from "@nestjs/common";
import { ChecklistModuleBase } from "./base/checklist.module.base";
import { ChecklistService } from "./checklist.service";
import { ChecklistController } from "./checklist.controller";
import { ChecklistResolver } from "./checklist.resolver";

@Module({
  imports: [ChecklistModuleBase],
  controllers: [ChecklistController],
  providers: [ChecklistService, ChecklistResolver],
  exports: [ChecklistService],
})
export class ChecklistModule {}
