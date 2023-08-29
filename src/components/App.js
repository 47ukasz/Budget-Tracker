import styles from "./App.module.css";
import Header from "./Header/Header";
import InfoTabs from "./InfoTabs/InfoTabs";
import Expenses from "./Expenses/Expenses";
import ExpenseProvider from "../contexts/ExpenseContext";

function App() {
  return (
    <div className={styles.app}>
      <ExpenseProvider>
        <Header />
        <InfoTabs />
        <Expenses />
      </ExpenseProvider>
    </div>
  );
}

export default App;
