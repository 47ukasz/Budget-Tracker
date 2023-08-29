import { useState, useRef } from "react";
import styles from "./NewExpense.module.css";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import { useExpense } from "../../../contexts/ExpenseContext";

export default function NewExpense() {
  const { dispatch, budget, spent } = useExpense();
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const id = useRef(0);

  function addExpenseHandler(e) {
    e.preventDefault();
    if (!name || !cost) return;

    const newExpense = { name, cost: Number(cost), id: id.current };
    dispatch({ type: "expense/add", payload: newExpense });
    id.current += 1;
    setName("");
    setCost("");
  }

  return (
    <div className={styles.newExpense}>
      <h2>Add Expense</h2>
      {budget <= spent ? (
        <p>
          You spent all your money! Change your budget or delete some expenses.
        </p>
      ) : (
        <form>
          <div>
            <label>Name</label>
            <Input value={name} onChange={setName} />
          </div>
          <div>
            <label>Cost</label>
            <Input value={cost} onChange={setCost} />
          </div>
          <Button onClick={addExpenseHandler}>Save</Button>
        </form>
      )}
    </div>
  );
}
