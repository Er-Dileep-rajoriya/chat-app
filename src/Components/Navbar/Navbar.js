import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_m_MIEJFQPSHoyXXBpBIsaqTlUqaHCh_2PsqLTztlQ&s"
          alt="logo"
        />
      </div>
      <div className="right">
        <span className="group-name">Placement Cell : Doubt</span>
        <p>This Group is only for placement related Doubt</p>
      </div>
    </div>
  );
}

export default Navbar;
