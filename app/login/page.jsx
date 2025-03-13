"use client";
import "./login.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
    const router = useRouter();

    return (
        <div className="container">
            <div className="userIcon">
                <Image
                    src="/usuario.png"
                    alt="Usuário"
                    width={40}
                    height={40}
                    onClick={() => router.push("/usuario")}
                    style={{ cursor: "pointer", position: "absolute", top: 20, right: 20 }}
                />
            </div>
            <div className="login">
                <h1>LOGIN</h1>
                <h3>Bem-vindo de volta!</h3>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Senha" type="password" />
                <Input placeholder="Confirme sua senha" type="password" />
                <Button text="Entrar" onClick={() => router.push("/usuario")} />
                <Button text="Não tem uma conta? Cadastre-se" onClick={() => router.push("/cadastro")} />
            </div>
        </div>
    );
}
