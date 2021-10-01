import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props: any) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense : any) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} 
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
