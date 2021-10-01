import { combineReducers } from "redux";
import { addExpenseList } from "./ExpensesReducerList";

const rootReducer = combineReducers({
  Expenses: addExpenseList,
});

export default rootReducer;
