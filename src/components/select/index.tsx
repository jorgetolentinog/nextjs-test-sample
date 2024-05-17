import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import styles from "./styles.module.css";

export function Select(
  props: Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    "style" | "className"
  >
) {
  return (
    <select className={styles.select} {...props}>
      {props.children}
    </select>
  );
}
