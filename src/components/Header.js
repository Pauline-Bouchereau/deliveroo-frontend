import logoDeliveroo from "../assets/img/logo-deliveroo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logoDeliveroo} alt="Logo Deliveroo" />
      </div>
    </header>
  );
};

export default Header;
