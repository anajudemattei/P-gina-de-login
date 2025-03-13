"use client";
import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const router = useRouter();
    
    return (
        <div className={styles.container}>
            <div className={styles.userIcon}>
                <Image src="/user-icon.png" alt="Usuário" width={40} height={40} onClick={() => router.push("/usuario")} style={{ cursor: "pointer", position: "absolute", top: 20, right: 20 }} />
            </div>
            <div className={styles.login}>
                <h1>LOGIN</h1>
                <h3>Bem-vindo de volta</h3>
                <Input placeholder="Username" />
                <Input placeholder="Password" type="password" />
                <Button text="Login" />
                <Button text="Fazer Cadastro" onClick={() => router.push("/cadastro")} /> {/* Added onClick prop */}
            </div>
        </div>
    );
}