"use client";

import { DocumentInput } from "./document-input";
import styles from "./styles.module.css";
import { Button } from "@/components/button";
import { Select } from "@/components/select";
import { SubmitIcon } from "./submit-icon";
import { CancelIcon } from "./cancel-icon";
import { sendAction } from "./actions";
import { useCallback, useEffect, useState } from "react";

interface Props {
  onClose?: () => void;
}

export function SendDocumentModal(props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClose = useCallback(() => {
    props.onClose?.();
  }, [props]);

  useEffect(() => {
    function handle(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose]);

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
      <div className={styles.modal} role="dialog" aria-label="Enviar documento">
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
            <DocumentInput />
          </div>
          <div className={styles.formActions}>
            <Button disabled={isSubmitting} onClick={onClose} type="button">
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
    </>
  );
}
