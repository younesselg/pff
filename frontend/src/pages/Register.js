import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [disciplines, setDisciplines] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/adherents", {
                nom,
                prenom,
                email,
                mot_de_passe: motDePasse,
                disciplines,
            });
            navigate("/login");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Inscription</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700">Nom</label>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Prénom</label>
                    <input
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Mot de passe</label>
                    <input
                        type="password"
                        value={motDePasse}
                        onChange={(e) => setMotDePasse(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Disciplines</label>
                    <select
                        multiple
                        value={disciplines}
                        onChange={(e) => setDisciplines([...e.target.selectedOptions].map(option => option.value))}
                        className="border rounded w-full py-2 px-3"
                    >
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Gymnastique">Gymnastique</option>
                        <option value="Handball">Handball</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    S'inscrire
                </button>
            </form>
        </div>
    );
}
