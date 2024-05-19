import styles from "./styles.module.css";
import { Icon } from "./icon";
import { useState } from "react";
import { FileInputButton } from "../file-input-button";

export const SelectFileButton: FileInputButton = (props) => {
  const [processing, setProcessing] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setProcessing(true);
    readFile(file, () => setProcessing(false));
  }

  function readFile(file: File, onFinally: () => void) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = e.target?.result;
      if (!fileData) return;

      if (typeof fileData !== "string") {
        throw new Error("File content is not a string");
      }

      props.onChange?.({
        data: fileData,
        name: file.name,
        type: file.type,
        size: file.size,
      });

      onFinally();
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={styles.container}>
      <label
        htmlFor="file-upload"
        className={styles.label}
        role="button"
        tabIndex={0}
        aria-disabled={processing}
      >
        <Icon className={styles.icon} />
        Seleccionar documento
      </label>
      <input
        type="file"
        id="file-upload"
        onChange={handleChange}
        disabled={processing}
        value=""
        style={{ display: "none" }}
      />
    </div>
  );
}
