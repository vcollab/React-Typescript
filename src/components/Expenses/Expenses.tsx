import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props : any) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear: any) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense: any) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
     
        <div>
          {props.items.length ? 
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpenseList items = {filteredExpenses}/>
      </Card>
:null}
    </div>
    
  );
};

export default Expenses;
