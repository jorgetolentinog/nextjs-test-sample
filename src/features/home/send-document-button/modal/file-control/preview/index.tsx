import { Blank } from "./blank";
import styles from "./styles.module.css";

interface Props {
  fileContent: string;
}

export function Preview() {
  return (
    <div className={styles.container}>
      <Blank />
    </div>
  );
}
