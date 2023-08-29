import { useState } from "react";
import { useExpense } from "../../../contexts/ExpenseContext";
import Button from "../../Button/Button";
import styles from "./Tab.module.css";
import Input from "../../Input/Input";

export default function Tab({ content: { text, amount, theme } }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");
  const { dispatch } = useExpense();

  function updateBudget() {
    if (!value) return;

    dispatch({ type: "budget/update", payload: value });
    setIsEditing(false);
    setValue("");
  }

  function closeEditing() {
    setIsEditing(false);
    setValue("");
  }

  if (theme === "gray" && isEditing)
    return (
      <div className={`${styles.tab} ${styles[theme]}`}>
        <Input
          placeholder="Enter budget..."
          value={value}
          onChange={setValue}
        />
        <Button onClick={updateBudget}>Save</Button>
        <Button onClick={closeEditing}>Close</Button>
      </div>
    );

  return (
    <div className={`${styles.tab} ${styles[theme]}`}>
      <p>
        {text}: <span>${amount}</span>
      </p>
      {theme === "gray" && (
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      )}
    </div>
  );
}
