import { Blank } from "./blank";
import { NotSupport } from "./not-support";
import { Pdf } from "./pdf";
import { Photo } from "./photo";
import styles from "./styles.module.css";

interface Props {
  document?: {
    data: string;
    name: string;
    type: string;
    size: number;
  };
}

export function Preview(props: Props) {
  if (props.document == null) {
    return (
      <div className={styles.container}>
        <Blank />
      </div>
    );
  }

  const { type } = props.document;

  const isPhoto = type === "image/jpeg" || type === "image/png";
  if (isPhoto) {
    return (
      <div className={styles.container}>
        <Photo data={props.document.data} />
      </div>
    );
  }

  const isPdf = type === "application/pdf";
  if (isPdf) {
    return (
      <div className={styles.container}>
        <Pdf data={props.document.data} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <NotSupport />
    </div>
  );
}
