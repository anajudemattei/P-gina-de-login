"use client";
import styles from "../../styles/Home.module.css";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Usuario() {
    const router = useRouter();
    
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <Image src="/user-icon.png" alt="Usuário" width={80} height={80} />
                <h1>USUÁRIO</h1>
                <h3>Bem-vindo ao seu perfil</h3>
                <p>Nome: Usuário Exemplo</p>
                <p>Email: usuario@email.com</p>
            </div>
        </div>
    );
}
