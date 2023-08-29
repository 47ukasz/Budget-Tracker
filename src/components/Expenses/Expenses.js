import styles from "./Expenses.module.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import NewExpense from "./NewExpense/NewExpense";
import SearchBar from "./SearchBar/SearchBar";

export default function Expenses() {
  return (
    <main className={styles.expenses}>
      <h2>Expenses</h2>
      <SearchBar />
      <ExpensesList />
      <NewExpense />
    </main>
  );
}
