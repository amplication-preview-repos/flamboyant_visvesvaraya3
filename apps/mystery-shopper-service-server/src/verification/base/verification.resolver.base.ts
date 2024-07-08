/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Verification } from "./Verification";
import { VerificationCountArgs } from "./VerificationCountArgs";
import { VerificationFindManyArgs } from "./VerificationFindManyArgs";
import { VerificationFindUniqueArgs } from "./VerificationFindUniqueArgs";
import { CreateVerificationArgs } from "./CreateVerificationArgs";
import { UpdateVerificationArgs } from "./UpdateVerificationArgs";
import { DeleteVerificationArgs } from "./DeleteVerificationArgs";
import { Agent } from "../../agent/base/Agent";
import { Administrator } from "../../administrator/base/Administrator";
import { VerificationService } from "../verification.service";
@graphql.Resolver(() => Verification)
export class VerificationResolverBase {
  constructor(protected readonly service: VerificationService) {}

  async _verificationsMeta(
    @graphql.Args() args: VerificationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Verification])
  async verifications(
    @graphql.Args() args: VerificationFindManyArgs
  ): Promise<Verification[]> {
    return this.service.verifications(args);
  }

  @graphql.Query(() => Verification, { nullable: true })
  async verification(
    @graphql.Args() args: VerificationFindUniqueArgs
  ): Promise<Verification | null> {
    const result = await this.service.verification(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Verification)
  async createVerification(
    @graphql.Args() args: CreateVerificationArgs
  ): Promise<Verification> {
    return await this.service.createVerification({
      ...args,
      data: {
        ...args.data,

        agent: args.data.agent
          ? {
              connect: args.data.agent,
            }
          : undefined,

        administrator: args.data.administrator
          ? {
              connect: args.data.administrator,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Verification)
  async updateVerification(
    @graphql.Args() args: UpdateVerificationArgs
  ): Promise<Verification | null> {
    try {
      return await this.service.updateVerification({
        ...args,
        data: {
          ...args.data,

          agent: args.data.agent
            ? {
                connect: args.data.agent,
              }
            : undefined,

          administrator: args.data.administrator
            ? {
                connect: args.data.administrator,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Verification)
  async deleteVerification(
    @graphql.Args() args: DeleteVerificationArgs
  ): Promise<Verification | null> {
    try {
      return await this.service.deleteVerification(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Agent, {
    nullable: true,
    name: "agent",
  })
  async getAgent(
    @graphql.Parent() parent: Verification
  ): Promise<Agent | null> {
    const result = await this.service.getAgent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Administrator, {
    nullable: true,
    name: "administrator",
  })
  async getAdministrator(
    @graphql.Parent() parent: Verification
  ): Promise<Administrator | null> {
    const result = await this.service.getAdministrator(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
