import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [adherents, setAdherents] = useState([]);
    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const adherentResponse = await axios.get("/api/adherents");
                const disciplineResponse = await axios.get("/api/disciplines");
                setAdherents(adherentResponse.data);
                setDisciplines(disciplineResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Dashboard Administrateur</h1>
            <div className="bg-white p-6 rounded shadow-md w-80 mb-4">
                <h2 className="text-xl font-semibold">Adhérents</h2>
                <ul>
                    {adherents.map((adherent) => (
                        <li key={adherent.id} className="border-b py-2">
                            {adherent.nom} {adherent.prenom}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white p-6 rounded shadow-md w-80">
                <h2 className="text-xl font-semibold">Disciplines</h2>
                <ul>
                    {disciplines.map((discipline) => (
                        <li key={discipline.id} className="border-b py-2">
                            {discipline.nom}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
