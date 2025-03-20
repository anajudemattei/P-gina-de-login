"use client";
import "./cadastro.css";
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function Cadastro() {
    const router = useRouter();
    
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    const handleCheck = () => {
        if (input1 !== input2) {
            setMatch(false);
            setError("As senhas não conferem!");
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
            setError("Sucesso!");
        }
    };

    return (
        <div className="container">
            <div className="cadastro">
                <h1>CADASTRO</h1>
                <h3>Crie sua conta</h3>
                <input type="email" placeholder="E-mail"  />
                <input type="text" placeholder="Nome de Usuário"/>
                <Input placeholder="Data de Nascimento" type="date" />
                <input type="password" placeholder="Digite a senha" value={input1} onChange={(e) => setInput1(e.target.value)} />
                <input type="password" placeholder="Repita a senha" value={input2} onChange={(e) => setInput2(e.target.value)} />
                <button className="cadastrar-button" onClick={handleCheck}>Cadastrar</button>{" "}
                {match !== null && <p>{error}</p>}{" "}
                <Button text="Voltar" onClick={() => router.push('/login')} />
            </div>
        </div>
    );
}
