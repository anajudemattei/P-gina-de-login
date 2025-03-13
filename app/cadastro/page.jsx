"use client";
import "./cadastro.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function Cadastro() {
    const router = useRouter();
    
    return (
        <div className="container">
            <div className="cadastro">
                <h1>CADASTRO</h1>
                <h3>Crie sua conta</h3>
                <Input placeholder="Nome" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Data de Nascimento" type="date" />
                <Input placeholder="Senha" type="password" />
                <Input placeholder="Confirme sua senha" type="password" />
                <Button text="Cadastrar" onClick={() => alert('Cadastro realizado!')} />
                <Button text="Voltar" onClick={() => router.push('/login')} />
            </div>
        </div>
    );
}
