import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-orange-950 h-16 flex items-center justify-center px-4">
      <Link to="/" className="text-white text-2xl m-4">
        Home
      </Link>
      <Link to="/decks" className="text-white text-2xl m-4">
        Decks
      </Link>
    </nav>
  );
}
