import { useExpense } from "../../contexts/ExpenseContext";
import styles from "./InfoTabs.module.css";
import Tab from "./Tab/Tab";

export default function InfoTabs() {
  const { budget, spent } = useExpense();

  const tabsInfo = [
    { text: "Budget", theme: "gray", amount: budget },
    { text: "Remaining", theme: "green", amount: budget - spent },
    { text: "Spent so far", theme: "blue", amount: spent },
  ];

  return (
    <div className={styles.infoTabs}>
      {tabsInfo.map((el, i) => (
        <Tab content={el} key={i} />
      ))}
    </div>
  );
}
