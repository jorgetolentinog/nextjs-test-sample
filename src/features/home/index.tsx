import { Button } from "@/components/button";
import { FilesFeature } from "./files";
import { SendDocumentFeature } from "./send-document-modal";
import { SendIcon } from "./send-icon";
import styles from "./styles.module.css";
import { DirIcon } from "./dir-icon";
import { OpenDocumentModalButton } from "./open-document-modal-button";

export default function HomeFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.dirName}>
            <DirIcon className={styles.dirIcon} />
            Nombre de la carpeta
          </div>
          <OpenDocumentModalButton />
        </div>
        <FilesFeature />
        {/* <SendDocumentFeature /> */}
      </div>
    </div>
  );
}
