"use client";
import "./usuario.css";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Usuario() {
    const router = useRouter();

    return (
        <div className="container">
            <div className="login">
                <Image src="/usuario.png" alt="Usuário" width={80} height={80} />
                <h1>USUÁRIO</h1>
                <h3>Bem-vindo ao seu perfil!</h3>
                <p><strong>Nome:</strong> Ana Julia Demattei</p>
                <p><strong>Email:</strong> anajudemattei@email.com</p>
                <p><strong>Data de Nascimento:</strong> 26/04/2008</p>
                <p><strong>Turma:</strong> Técnico em Desenvolvimento de Sistemas 1</p>
                <Button text="Editar" onClick={() => alert("Função de edição ainda não implementada!")} />
                <Button text="Voltar" onClick={() => router.push("/login")} />
            </div>
        </div>
    );
}
