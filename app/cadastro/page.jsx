"use client";
import styles from "../../styles/Home.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function Cadastro() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1>CADASTRO</h1>
                <h3>Crie sua conta</h3>
                <Input placeholder="Nome" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Senha" type="password" />
                <Button text="Cadastrar" onClick={() => alert('Cadastro realizado!')} />
            </div>
        </div>
    );
}
