import { createContext, useContext, useReducer } from "react";

const ExpenseContext = createContext();

const initialState = {
  budget: 2000,
  spent: 0,
  query: "",
  expenses: [
    /// name, cost, id
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "expense/add":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        spent: state.spent + action.payload.cost,
      };
    case "expense/delete":
      return {
        ...state,
        expenses: [
          ...state.expenses.filter((el) => el.id !== action.payload.id),
        ],
        spent: state.spent - action.payload.cost,
      };
    case "query/update":
      return { ...state, query: action.payload };
    case "budget/update":
      return { ...state, budget: action.payload };
    default:
      throw new Error("Unknown action type!");
  }
}

export default function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ExpenseContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  const context = useContext(ExpenseContext);

  if (context === undefined)
    throw new Error("Hook useExpense was used outside of ExpenseProvider");

  return context;
}
