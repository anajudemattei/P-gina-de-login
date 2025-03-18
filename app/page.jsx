"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./redirecting.css";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);


    return (
        <div className="container">
            <h1>Redirecionando...</h1>
            <p>Por favor, aguarde.</p>
        </div>
    );
}
