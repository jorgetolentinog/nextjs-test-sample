import { ToggleIcon } from "./toggle-icon";
import styles from "./styles.module.css";

export function Toggle() {
  return (
    <button className={styles.toggle}>
      <ToggleIcon className={styles.toggleIcon} />
    </button>
  );
}
