import React from "react";
import "./ExpensesFilter.css";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles({
  root: {
    color: "red",
  },
});
const ExpensesFilter = (props: any) => {
  const dropdownchangeHandler = (event: any) => {
    props.onChangeFilter(event.target.value);
  };
  const classes = useStyle();
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* <select value={props.selected} onChange={dropdownchangeHandler}> */}
        <NativeSelect
          className={classes.root}
          id="demo-customized-select-native"
          value={props.selected}
          onChange={dropdownchangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </NativeSelect>
        {/* </select> */}
      </div>
    </div>
  );
};
export default ExpensesFilter;
