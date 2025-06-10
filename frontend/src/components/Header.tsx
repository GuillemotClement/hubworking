import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className='flex justify-between px-5 py-2 shadow items-center'>
      <ul className='flex gap-x-4'>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/coworkings'>Nos Espaces</Link>
        </li>
      </ul>
      <ul className='flex gap-x-4'>
        <li>
          <Link to='/login'>Se Connecter</Link>
        </li>
        <li>
          <Link to='/register'>Incription</Link>
        </li>
        <li>
          <Link to=''>Deconnexion</Link>
        </li>
        <li>
          <Link to='/profil'>Mon Profil</Link>
        </li>
      </ul>
      <FontAwesomeIcon icon={faBars} />
    </header>
  );
}
