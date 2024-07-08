import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChecklistServiceBase } from "./base/checklist.service.base";

@Injectable()
export class ChecklistService extends ChecklistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
