import styles from "./styles.module.css";

interface Props {
  data: string;
}

export function Pdf(props: Props) {
  return (
    <div className={styles.photo}>
      <iframe
        src={`${props.data}#toolbar=0`}
        style={{ width: "100%", height: "100%" }}
        data-testid="preview-pdf"
      />
    </div>
  );
}
