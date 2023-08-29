import { useExpense } from "../../../contexts/ExpenseContext";
import Input from "../../Input/Input";

export default function SearchBar() {
  const { query, dispatch } = useExpense();

  function updateQuery(value) {
    dispatch({ type: "query/update", payload: value });
  }

  return (
    <div>
      <Input
        value={query}
        onChange={updateQuery}
        placeholder="Type to search..."
      />
    </div>
  );
}
