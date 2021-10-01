
export const DEFAULT_EXPENSE = {
  loading: true,
  expenses: [],
};

export const addExpenseList = (state = DEFAULT_EXPENSE, action:any) => {
  switch (action.type) {
    case "ADD_EXPENSE_LIST":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
