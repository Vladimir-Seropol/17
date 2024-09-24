import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import SwitchThem from "../../SwitchTheme";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
     
      {isOpen && (
        <div className={style.wrapper}>
            
          <nav>
             <SwitchThem />
            <Link to="/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/recipies" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/history" onClick={handleLinkClick}>
              History
            </Link>
          </nav>
          
        </div>
      )}
    </div>
  );
};