import { connect } from "react-redux";
import App from "./App";
import { fetchExpenseList } from "./reducer/actions/thunks";


const mapDispatchToProps = {
    fetchExpenseList
}

export default connect(null, mapDispatchToProps)(App);
