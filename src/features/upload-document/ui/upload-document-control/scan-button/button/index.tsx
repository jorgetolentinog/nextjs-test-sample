import { ButtonIcon } from "./button-icon";
import styles from "./styles.module.css";

export function Button() {
  return (
    <button className={styles.button}>
      <ButtonIcon className={styles.buttonIcon} />
      Escanear Documento
    </button>
  );
}
