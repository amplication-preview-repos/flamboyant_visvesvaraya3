/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ChecklistWhereUniqueInput } from "../../checklist/base/ChecklistWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ChecklistCreateNestedManyWithoutTasksInput {
  @Field(() => [ChecklistWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ChecklistWhereUniqueInput],
  })
  connect?: Array<ChecklistWhereUniqueInput>;
}

export { ChecklistCreateNestedManyWithoutTasksInput as ChecklistCreateNestedManyWithoutTasksInput };
