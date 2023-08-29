import styles from "./Input.module.css";

export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
