import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.css";

export function Button(
  props: Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "style" | "className"
  >
) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}
