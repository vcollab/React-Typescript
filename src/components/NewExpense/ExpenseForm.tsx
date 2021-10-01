import React, { useState } from "react";
import "./ExpenseForm.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const ExpenseForm = (props :any) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event :any) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event :any) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event :any) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event :any) => {
    event.preventDefault();
    const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const useStyle = makeStyles({
    root: {
      background: "linear-gradient(45deg, #FE6BBB, #FF8E53)",
      border: 0,
      borderRadius: 15,
      marginBottom: 15,
      color: "white",
      padding: "5px 30px",
    },
  });

  const AddButton = () => {
    const classes = useStyle();
    return (
      <Button type="submit" className={classes.root}>
        Add Expenses
      </Button>
    );
  };

  const CancelButton = () => {
    const classes1 = useStyle();
    return (
      <Button onClick={props.onCancel} className={classes1.root}>
        Cancel
      </Button>
    );
  };

  return (
    // <FormControl onSubmit={submitHandler}>
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* <div className="new-expense__control"> */}
        <div>
          {/* <label>Title</label> */}
          <TextField
            variant="standard"
            label="Title"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          ></TextField>
          {/* <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          /> */}
        </div>
        <div>
          {/* <div className="new-expense__control"> */}
          <TextField
            variant="standard"
            label="Amount"
            value={EnteredAmount}
            onChange={amountChangeHandler}
          ></TextField>
          {/* <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={amountChangeHandler}
          /> */}
        </div>
        <div>
          {/* <div className="new-expense__control"> */}
          <TextField
            type="date"
            label="Date"
            value={EnteredDate}
            onChange={dateChangeHandler}
          ></TextField>
          {/* <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-30"
            value={EnteredDate}
            onChange={dateChangeHandler}
          /> */}
        </div>
      </div>
      <div className="new-expense__actions">
        {/* <ButtonStyled onClick={props.onCancel} /> */}
        {/* <button type="button" onClick={props.onCancel}>
          Cancel
        </button> */}
        <CancelButton />
        {/* <button type="submit">Add Expense</button> */}
        <AddButton />
      </div>
    </form>
    // {/* </FormControl> */}
  );
};

export default ExpenseForm;
