import { Icon } from "./icon";
import styles from "./styles.module.css";

export function Blank() {
  return (
    <div className={styles.content}>
      <Icon className={styles.icon} />
      Ningún documento seleccionado
    </div>
  );
}
