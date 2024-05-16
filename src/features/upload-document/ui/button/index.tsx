import styles from "./styles.module.css";

interface ButtonProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={styles.button}>
      {/* <i className={styles.icon}>{props.icon}</i>
      Enviar */}
      {props.children}
    </button>
  );
}
