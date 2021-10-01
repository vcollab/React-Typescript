import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Container from "@material-ui/core/Container";
import ExpensesContainer from "./components/Expenses/ExpensesContainer";

const DUMMY_Expense : any = [];
const App = ({fetchExpenseList}: any) => {
  const [expenses, setExpense] = useState(DUMMY_Expense);
  const addExpenseHandler = (expense : any) => {
    fetchExpenseList(expense);
    setExpense((prevExpense : any) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <Container maxWidth="sm">
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpensesContainer />
        {/* <Expenses items={expenses} /> */}
      </div>
    </Container>
  );
};
export default App;
