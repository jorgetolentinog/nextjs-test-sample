import styles from "./styles.module.css";

interface Props {
  data: string;
}

export function Photo(props: Props) {
  return (
    <div className={styles.photo}>
      <img src={props.data} alt="Preview" />
    </div>
  );
}
