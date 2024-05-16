import { UploadDocumentControl } from "./upload-document-control";
import styles from "./styles.module.css";
import Button from "./button";
import Select from "./select";
import { SubmitIcon } from "./submit-icon";
import { CancelIcon } from "./cancel-icon";

export default function UploadDocumentFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label>Tipo de documento</label>
          <Select>
            <option value="0">Orden médica</option>
            <option value="0">Formulario</option>
            <option value="0">Otros documentos</option>
          </Select>
        </div>
        <div className={styles.formGroup}>
          <label>Subir documento</label>
          <UploadDocumentControl />
        </div>
        <div className={styles.formActions}>
          <Button>
            <CancelIcon className={styles.buttonIcon} />
            Cancelar
          </Button>
          <Button>
            <SubmitIcon className={styles.buttonIcon} />
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
