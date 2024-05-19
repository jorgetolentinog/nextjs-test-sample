import { FileIcon } from "./file-icon";
import styles from "./styles.module.css";

export async function FilesFeature() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <table className={styles.table} aria-label="Listado de archivos">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Tamaño</th>
          <th>Fecha de envío</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.fileName}>
            <FileIcon className={styles.fileIcon} />
            <a href="#">Documento ABC.pdf</a>
          </td>
          <td className={styles.textSecondary}>PDF</td>
          <td className={styles.textSecondary}>1MB</td>
          <td className={styles.textSecondary}>01/01/2021</td>
        </tr>
        <tr>
          <td className={styles.fileName}>
            <FileIcon className={styles.fileIcon} />
            <a href="#">Documento XYZ.png</a>
          </td>
          <td className={styles.textSecondary}>PNG</td>
          <td className={styles.textSecondary}>2MB</td>
          <td className={styles.textSecondary}>01/01/2021</td>
        </tr>
        <tr>
          <td className={styles.fileName}>
            <FileIcon className={styles.fileIcon} />
            <a href="#">Documento ABC.pdf</a>
          </td>
          <td className={styles.textSecondary}>PDF</td>
          <td className={styles.textSecondary}>1MB</td>
          <td className={styles.textSecondary}>01/01/2021</td>
        </tr>
        <tr>
          <td className={styles.fileName}>
            <FileIcon className={styles.fileIcon} />
            <a href="#">Documento XYZ.png</a>
          </td>
          <td className={styles.textSecondary}>PNG</td>
          <td className={styles.textSecondary}>2MB</td>
          <td className={styles.textSecondary}>01/01/2021</td>
        </tr>
        <tr>
          <td className={styles.fileName}>
            <FileIcon className={styles.fileIcon} />
            <a href="#">Documento ABC.pdf</a>
          </td>
          <td className={styles.textSecondary}>PDF</td>
          <td className={styles.textSecondary}>1MB</td>
          <td className={styles.textSecondary}>01/01/2021</td>
        </tr>
        <tr>
          <td className={styles.fileName}>
            <FileIcon className={styles.fileIcon} />
            <a href="#">Documento XYZ.png</a>
          </td>
          <td className={styles.textSecondary}>PNG</td>
          <td className={styles.textSecondary}>2MB</td>
          <td className={styles.textSecondary}>01/01/2021</td>
        </tr>
      </tbody>
    </table>
  );
}
