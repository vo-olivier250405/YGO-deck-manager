import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="h-fit md:h-full md:w-fit w-full flex justify-between md:flex-col items-start md:justify-start px-4 bg-orange-200 text-orange-800 pr-44">
      <Link to="/" className="text-2xl">
        Home
      </Link>
      <Link to="/decks" className="text-2xl">
        Decks
      </Link>
    </nav>
  );
}
