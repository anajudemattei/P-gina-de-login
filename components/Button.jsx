import styles from "../styles/Button.module.css";

export default function Button({ text, onClick }) { // Added onClick prop
    return (
        <button className={styles.button} onClick={onClick}>{text}</button> // Used onClick prop
    );
}