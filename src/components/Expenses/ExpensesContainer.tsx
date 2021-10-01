import { connect } from "react-redux";
import Expenses from "./Expenses";

const mapStateToProps = (state:any) => ({
  items: state?.Expenses?.expenses,
});

export default connect(mapStateToProps,null)(Expenses);
