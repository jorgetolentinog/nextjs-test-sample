import styles from "./styles.module.css";

interface SelectProps {
  children?: React.ReactNode;
}

export default function Select(props: SelectProps) {
  return (
    <select className={styles.select}>
      {props.children}
    </select>
  );
}
