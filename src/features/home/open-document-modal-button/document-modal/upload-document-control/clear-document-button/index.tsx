import styles from "./styles.module.css";
import { Icon } from "./icon";

export function ClearDocumentButton() {
  return (
    <button
      className={styles.button}
      role="button"
      tabIndex={0}
    >
      <Icon className={styles.icon} />
      Borrar documento
    </button>
  );
}
