import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "../img/menu.svg";
import DeleteIcon from "../img/delete.svg";
import ButtonPrimary from "./Atoms/ButtonPrimary";
import { docenteOption } from "../items/navbarItem";

const Navbar = ({ signShow = false }) => {
  const [navegationItems, setNavegationItems] = useState([]);
  const [dropcontent, setDropcontent] = useState(false);
  let history = useHistory();

  useEffect(() => setNavegationItems(docenteOption), []);

  const handleClick = () => setDropcontent((state) => !state);

  const LinkNavByArray = ({ to, text }) => (
    <li className="py-3 border-b-2">
      <Link to={to}>{text}</Link>
    </li>
  );

  const DropContent = () => {
    return (
      <div className="flex items-center justify-center absolute inset-0 bg-purple-600 text-white">
        <div className="right-1.5 top-1.5 absolute">
          <img
            src={DeleteIcon}
            onClick={handleClick}
            height={38}
            width={38}
            alt="delete"
            className="cursor-pointer"
          />
        </div>
        <ul className="text-3xl w-5/6 text-bold">
          {navegationItems.map((item, index) => (
            <LinkNavByArray {...item} key={index} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className="bg-purple-600 h-16 text-white flex justify-end items-center px-2">
        {signShow ? (
          <ButtonPrimary
            onClick={() => history.push('/singIn')}
            text="inicia session"
          />
        ) : (
          <img
            src={MenuIcon}
            height={38}
            width={38}
            onClick={handleClick}
            alt="menu"
            className="text-white cursor-pointer"
          />
        )}
      </nav>
      {dropcontent ? <DropContent /> : null}
    </>
  );
};

export default Navbar;
