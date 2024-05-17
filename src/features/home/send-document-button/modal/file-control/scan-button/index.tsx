import { Button } from "./button";
import { Toggle } from "./toggle";
import styles from "./styles.module.css";

export function ScanButton() {
  return (
    <div className={styles.split}>
      <Button />
      <Toggle />
    </div>
  );
}
