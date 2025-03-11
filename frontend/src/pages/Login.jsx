import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/login", { email, password });
            console.log(response.data);
        } catch (error) {
            console.error('Erreur dans la connexion!', error);
        }
        
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded">
            <h2 className="text-xl mb-4">Connexion</h2>
            <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" placeholder="Motdepasse" className="border p-2 w-full mb-2" onChange={(e) => {setPassword(e.target.value)}}/>
            <button className="bg-blue-500 text-white p-2 w-full">Se connecter</button>
            </form>
        </div>
    );
}