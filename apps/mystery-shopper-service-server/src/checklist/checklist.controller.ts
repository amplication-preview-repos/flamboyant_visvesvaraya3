import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChecklistService } from "./checklist.service";
import { ChecklistControllerBase } from "./base/checklist.controller.base";

@swagger.ApiTags("checklists")
@common.Controller("checklists")
export class ChecklistController extends ChecklistControllerBase {
  constructor(protected readonly service: ChecklistService) {
    super(service);
  }
}
