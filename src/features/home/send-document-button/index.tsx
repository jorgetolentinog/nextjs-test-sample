"use client";

import { Button } from "@/components/button";
import { SendIcon } from "../send-icon";
import styles from "./styles.module.css";
import { Modal } from "./modal";
import { useState } from "react";

export function SendDocumentButton() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <Button onClick={() => setToggleModal(!toggleModal)}>
        <SendIcon className={styles.sendIcon} />
        Enviar documento
      </Button>
      {toggleModal && <Modal onClose={() => setToggleModal(false)} />}
    </>
  );
}
