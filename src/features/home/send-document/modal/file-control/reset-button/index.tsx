import styles from "./styles.module.css";
import { Icon } from "./icon";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "className" | "style"
>;

export function ResetButton(props: Props) {
  return (
    <button className={styles.button} {...props}>
      <Icon className={styles.icon} />
      Borrar documento
    </button>
  );
}
