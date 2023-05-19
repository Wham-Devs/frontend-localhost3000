import Navigation from "./Navigation";

const Header = ({ currentUser }) => {


  return (
    <header class="header">
    <Navigation currentUser={ currentUser }/>
    </header>
  );
};

export default Header;
