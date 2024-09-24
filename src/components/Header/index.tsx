

import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useIsMobile } from "../../hooks/index";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

 const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="container">
      <div className={style.container}>
        <Link to="/" className={style.logo}>
          <img src={logo} alt="logo" />
          <span>Jelly Belly</span>
        </Link>
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </header>
  );
};

export default Header;
