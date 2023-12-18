import Image from "next/image";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Image
        src="/logo.png"
        width={200}
        height={64}
        alt="@"
        className="header__logo"
      />

      <nav className="header__nav">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Support</li>
        </ul>
      </nav>

      <Image
        src="/userIcon.png"
        width={30}
        height={30}
        alt="@"
        className="header__user"
      />
    </header>
  );
};

export default Header;
