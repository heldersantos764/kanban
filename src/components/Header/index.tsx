import { FC } from "react";
import { IoExitOutline } from "react-icons/io5";
import "./style.css";

const Header: FC = () => {
  return (
    <header className="header-admin">
      <div className="title fw-bold text-light fs-3">KanbanFlow</div>
      <div className="username">
        <span className="text-light">Nome do usuário</span>
        <button>
          <IoExitOutline size={30} color="white"/>
        </button>
      </div>
    </header>
  );
};

export default Header;
