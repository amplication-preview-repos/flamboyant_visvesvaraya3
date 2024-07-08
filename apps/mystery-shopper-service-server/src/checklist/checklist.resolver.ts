import * as graphql from "@nestjs/graphql";
import { ChecklistResolverBase } from "./base/checklist.resolver.base";
import { Checklist } from "./base/Checklist";
import { ChecklistService } from "./checklist.service";

@graphql.Resolver(() => Checklist)
export class ChecklistResolver extends ChecklistResolverBase {
  constructor(protected readonly service: ChecklistService) {
    super(service);
  }
}
