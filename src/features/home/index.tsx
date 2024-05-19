import { FilesFeature } from "./files";
import styles from "./styles.module.css";
import { FolderIcon } from "./folder-icon";
import { SendDocumentButton } from "./send-document-button";
import { Suspense } from "react";

export default function HomeFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.dirName}>
            <FolderIcon className={styles.dirIcon} />
            Nombre de la carpeta
          </div>
          <SendDocumentButton />
        </div>
        <Suspense fallback={<div>Cargando...</div>}>
          <FilesFeature />
        </Suspense>
      </div>
    </div>
  );
}
