import styles from "./styles.module.css";
import { Icon } from "./icon";

export function SelectButton() {
  return (
    <div className={styles.container}>
      <label htmlFor="file-upload" className={styles.label} role="button" tabIndex={0}>
        <Icon className={styles.icon} />
        Seleccionar documento
      </label>
      <input type="file" style={{ display: "none" }} id="file-upload" />
    </div>
  );
}
