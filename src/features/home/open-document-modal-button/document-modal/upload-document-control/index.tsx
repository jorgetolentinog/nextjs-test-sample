import { ClearDocumentButton } from "./clear-document-button";
import { DocumentPreview } from "./document-preview";
import { ScanButton } from "./scan-button";
import { SelectButton } from "./select-button";
import styles from "./styles.module.css";

export function UploadDocumentControl() {
  return (
    <div className={styles.container}>
      <div className={styles.stack}>
        <section className={styles.addSection}>
          <SelectButton />
          <ScanButton />
        </section>
        <section className={styles.previewSection}>
          <DocumentPreview />
          <ClearDocumentButton />
        </section>
      </div>
    </div>
  );
}
