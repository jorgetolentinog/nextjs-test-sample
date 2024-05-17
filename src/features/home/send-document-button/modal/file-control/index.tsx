import { ResetButton } from "./reset-button";
import { Preview } from "./preview";
import { ScanButton } from "./scan-button";
import { SelectButton } from "./select-button";
import styles from "./styles.module.css";

export function FileControl() {
  return (
    <div className={styles.container}>
      <div className={styles.stack}>
        <section className={styles.addSection}>
          <SelectButton />
          <ScanButton />
        </section>
        <section className={styles.previewSection}>
          <Preview />
          <ResetButton />
        </section>
      </div>
    </div>
  );
}
