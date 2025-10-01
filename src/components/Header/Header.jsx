import "./Header.css";
import HeaderContacts from "./HeaderContacts";
import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";

function Header() {
  return (
    <div className="header">
      <div className="header__wrapper holder">
        <HeaderLogo />
        <HeaderTitle />
        <HeaderContacts />
      </div>
    </div>
  );
}

export default Header;
