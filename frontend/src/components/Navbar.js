import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
        <h1 className="text-xl font-blod">Club de Sport</h1>
        <div>
            <Link to="/" className="px-4">Acceuil</Link>
            <Link to="/login" className="px-4">Connexion</Link>
            <Link to="/register" className="px-4">S'Inscrire</Link>
        </div>
    </nav>
    )
}