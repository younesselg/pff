import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        mot_de_passe: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/register", formData);
            console.log(response.data);
        } catch (error) {
            console.error('Erreur dans l\'inscription!', error);
        }
    };

    return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
    <h2 className="text-xl mb-4">Inscription</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom" className="border p-2 w-full mb-2" onChange={handleChange}/>
        <input type="text" name="prenom" placeholder="Prenom" className="border p-2 w-full mb-2" onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={handleChange}/>
        <input type="password" name="mot-de-passe" placeholder="Mot de passe" className="border p-2 w-full mb-2" onChange={handleChange}/>
        <button className="bg-blue-500 text-white p-2 w-full">S'inscrire</button>
    </form>
    </div>
    );
}