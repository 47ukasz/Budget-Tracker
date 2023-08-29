import styles from "./ExpensesList.module.css";
import ExpensesListItem from "./ExpensesListItem/ExpensesListItem";
import { useExpense } from "../../../contexts/ExpenseContext";

export default function ExpensesList() {
  const { expenses, query } = useExpense();
  const expensesQuery = expenses.filter((el) => el.name.includes(query));

  return (
    <ul className={styles.list}>
      {expensesQuery.map((el, i) => (
        <ExpensesListItem content={el} key={i} />
      ))}
    </ul>
  );
}
