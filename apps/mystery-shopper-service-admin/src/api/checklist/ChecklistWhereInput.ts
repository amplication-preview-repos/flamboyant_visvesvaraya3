import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ChecklistWhereInput = {
  id?: StringFilter;
  taskItem?: StringNullableFilter;
  completed?: BooleanNullableFilter;
  task?: TaskWhereUniqueInput;
};
