import { useExpense } from "../../../../contexts/ExpenseContext";
import styles from "./ExpensesListItem.module.css";

export default function ExpensesListItem({ content: { name, cost, id } }) {
  const { dispatch } = useExpense();

  function handleDelete() {
    dispatch({ type: "expense/delete", payload: { id, cost } });
  }

  return (
    <li className={styles.item}>
      <p>{name}</p>
      <div>
        <span>${cost}</span>
        <button onClick={handleDelete}>&times;</button>
      </div>
    </li>
  );
}
