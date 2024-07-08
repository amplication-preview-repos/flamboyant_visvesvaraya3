/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VerificationService } from "../verification.service";
import { VerificationCreateInput } from "./VerificationCreateInput";
import { Verification } from "./Verification";
import { VerificationFindManyArgs } from "./VerificationFindManyArgs";
import { VerificationWhereUniqueInput } from "./VerificationWhereUniqueInput";
import { VerificationUpdateInput } from "./VerificationUpdateInput";

export class VerificationControllerBase {
  constructor(protected readonly service: VerificationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Verification })
  async createVerification(
    @common.Body() data: VerificationCreateInput
  ): Promise<Verification> {
    return await this.service.createVerification({
      data: {
        ...data,

        agent: data.agent
          ? {
              connect: data.agent,
            }
          : undefined,

        administrator: data.administrator
          ? {
              connect: data.administrator,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        feedback: true,
        approved: true,

        agent: {
          select: {
            id: true,
          },
        },

        administrator: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Verification] })
  @ApiNestedQuery(VerificationFindManyArgs)
  async verifications(@common.Req() request: Request): Promise<Verification[]> {
    const args = plainToClass(VerificationFindManyArgs, request.query);
    return this.service.verifications({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        feedback: true,
        approved: true,

        agent: {
          select: {
            id: true,
          },
        },

        administrator: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Verification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async verification(
    @common.Param() params: VerificationWhereUniqueInput
  ): Promise<Verification | null> {
    const result = await this.service.verification({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        feedback: true,
        approved: true,

        agent: {
          select: {
            id: true,
          },
        },

        administrator: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Verification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVerification(
    @common.Param() params: VerificationWhereUniqueInput,
    @common.Body() data: VerificationUpdateInput
  ): Promise<Verification | null> {
    try {
      return await this.service.updateVerification({
        where: params,
        data: {
          ...data,

          agent: data.agent
            ? {
                connect: data.agent,
              }
            : undefined,

          administrator: data.administrator
            ? {
                connect: data.administrator,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          feedback: true,
          approved: true,

          agent: {
            select: {
              id: true,
            },
          },

          administrator: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Verification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVerification(
    @common.Param() params: VerificationWhereUniqueInput
  ): Promise<Verification | null> {
    try {
      return await this.service.deleteVerification({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          feedback: true,
          approved: true,

          agent: {
            select: {
              id: true,
            },
          },

          administrator: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}