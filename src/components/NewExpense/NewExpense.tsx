import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const NewExpense = (props : any) => {

  const [isEditing,setisEditing] = useState(false)
  
    
  const saveExpenseDataHandler = (enteredExpenseData : any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () =>
  {
    setisEditing(true);
  }

  const stopEditingHandler = () =>
  {
    setisEditing(false);
  }

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

  const AddExpenseButton = () => {
    const classes = useStyle();
    return (
      <Button onClick={startEditingHandler} className={classes.root}>
        Add New Expense
      </Button>
    );
  };


  return (
    <div className="new-expense">
    {!isEditing && <AddExpenseButton /> }
     {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler} />}
    </div>
  );
};
export default NewExpense;