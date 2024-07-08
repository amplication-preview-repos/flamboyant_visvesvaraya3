/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VerificationWhereUniqueInput } from "../../verification/base/VerificationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VerificationCreateNestedManyWithoutAgentsInput {
  @Field(() => [VerificationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VerificationWhereUniqueInput],
  })
  connect?: Array<VerificationWhereUniqueInput>;
}

export { VerificationCreateNestedManyWithoutAgentsInput as VerificationCreateNestedManyWithoutAgentsInput };