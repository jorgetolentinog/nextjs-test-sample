import { Icon } from "./icon";
import styles from "./styles.module.css";

export function NotSupport() {
  return (
    <div className={styles.notSupport}>
      <Icon className={styles.icon} />
      La vista previa no está disponible para este tipo de archivo.
    </div>
  );
}
