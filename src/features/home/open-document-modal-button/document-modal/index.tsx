import { UploadDocumentControl } from "./upload-document-control";
import styles from "./styles.module.css";
import { Button } from "@/components/button";
import { Select } from "@/components/select";
import { SubmitIcon } from "./submit-icon";
import { CancelIcon } from "./cancel-icon";
import { sendAction } from "./actions";
import { useState } from "react";

interface Props {
  onClose?: () => void;
}

export function DocumentModal(props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    sendAction({
      fileContent: "pdf",
    })
      .then((response) => {
        console.log("Document sent", response);
      })
      .catch(() => {
        console.error("Error sending document");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <div className={styles.modal}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label>Tipo de documento</label>
              <Select disabled={isSubmitting}>
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
              <Button disabled={isSubmitting} onClick={props.onClose}>
                <CancelIcon className={styles.buttonIcon} />
                Cancelar
              </Button>
              <Button onClick={submit} disabled={isSubmitting}>
                <SubmitIcon className={styles.buttonIcon} />
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
