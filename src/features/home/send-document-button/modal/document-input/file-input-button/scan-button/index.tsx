import { Button } from "./button";
import { Toggle } from "./toggle";
import styles from "./styles.module.css";
import { FileInputButton } from "../file-input-button";

export const ScanButton: FileInputButton = (props) => {
  return (
    <div className={styles.split}>
      <Button />
      <Toggle />
    </div>
  );
};
