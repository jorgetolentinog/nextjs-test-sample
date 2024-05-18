import { ResetButton } from "./reset-button";
import { Preview } from "./preview";
import { ScanButton } from "./scan-button";
import { SelectFileButton } from "./select-file-button";
import styles from "./styles.module.css";
import { useState } from "react";

export function FileControl() {
  const [document, setDocument] = useState<
    | {
        data: string;
        name: string;
        type: string;
        size: number;
      }
    | undefined
  >();

  function handleDocument(args: {
    data: string;
    name: string;
    type: string;
    size: number;
  }) {
    setDocument(args);
  }

  function handleReset() {
    setDocument(undefined);
  }

  return (
    <div className={styles.container}>
      <div className={styles.stack}>
        <section className={styles.addSection}>
          <SelectFileButton onChange={handleDocument} />
          <ScanButton />
        </section>
        <section className={styles.previewSection}>
          <Preview document={document} />
          <ResetButton
            type="button"
            role="button"
            tabIndex={0}
            onClick={handleReset}
          />
        </section>
      </div>
    </div>
  );
}
