/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Agent } from "../../agent/base/Agent";
import { Administrator } from "../../administrator/base/Administrator";

@ObjectType()
class Verification {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  feedback!: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  approved!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => Agent,
  })
  @ValidateNested()
  @Type(() => Agent)
  @IsOptional()
  agent?: Agent | null;

  @ApiProperty({
    required: false,
    type: () => Administrator,
  })
  @ValidateNested()
  @Type(() => Administrator)
  @IsOptional()
  administrator?: Administrator | null;
}

export { Verification as Verification };
