"use client";

import { Button } from "@/components/button";
import { SendIcon } from "../send-icon";
import styles from "./styles.module.css";
import { DocumentModal } from "./document-modal";
import { useState } from "react";

export function OpenDocumentModalButton() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <Button onClick={() => setToggleModal(!toggleModal)}>
        <SendIcon className={styles.sendIcon} />
        Enviar documento
      </Button>
      {toggleModal && <DocumentModal onClose={() => setToggleModal(false)} />}
    </>
  );
}
