import styles from "./styles.module.css";

interface Props {
  data: string;
}

export function Photo(props: Props) {
  return (
    <picture className={styles.photo} data-testid="preview-photo">
      <img src={props.data} alt="Preview" />
    </picture>
  );
}
