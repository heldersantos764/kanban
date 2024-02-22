import { FC } from "react";
import { IoExitOutline } from "react-icons/io5";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.localStorage.clear();
    navigate('/');
  }

  return (
    <header className="header-admin">
      <div className="title fw-bold text-light fs-3">KanbanFlow</div>
      <div className="username">
        <span className="text-light">{window.localStorage.getItem('username')}</span>
        <button onClick={handleClick}>
          <IoExitOutline size={30} color="white"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
