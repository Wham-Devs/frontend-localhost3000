import Navigation from "./Navigation";

const Header = ({ currentUser, logout }) => {


  return (
    <header className="header">
    <Navigation currentUser={ currentUser } logout={ logout }/>
    </header>
  );
};

export default Header;
