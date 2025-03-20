"use client";
import "./cadastro.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function Cadastro() {
    const router = useRouter();
    
    const handleCheck = () => {
        if (input1 !== input2) {
            setMatch(false);
            setError("As senhas não conferem");
        } else if (input1.length < 6) {
            setMatch(false);
            setError("A senha deve ter no mínimo 6 caracteres");
        } else if (input1.length === 0) {
            setMatch(false);
            setError("Preencha o input 1");
        } else if (input2.length === 0) {
            setMatch(false);
            setError("Preencha o input 2");
        } else {
            setMatch(true);
            setError("Sucesso");
        }
    };

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
