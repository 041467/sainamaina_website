import { NavLink } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div>
            <a
              href="smppssian@gmail.com"
              // style={{
              //   textDecoration: "none",
              //   color: "red",
              //   textAlign: "end",
              //   gap: "20px",
              //   paddingTop: "35px",
              //   display: "flex",
              //   flexDirection: "-moz-initial",
              // }}
            >
              <SiGmail />
              smpps@gmail.com
            </a>
          </div>
          <div>
            <a
              href="tel:071-405135"
              // style={{
              //   textDecoration: "none",
              //   color: "red",

              //   display: "flex",
              //   gap: "20px",
              //   paddingTop: "35px",
              //   textAlign: "center",
              //   paddingLeft: "50px",
              // }}
            >
              <MdLocalPhone />
              071-405135
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=61576284592685"
              target="_blank"
            >
              <FaFacebook
              // style={{ color: "black", height: "30px", width: "30px" }}
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.google.com/maps/place/Sainamaina+Parroha+Parameshwar+Model+Secondary+School/@27.6882748,83.3676609,17z/data=!3m1!4b1!4m6!3m5!1s0x39968924ee2f33a3:0x40bc5cb604665862!8m2!3d27.6882748!4d83.3702358!16s%2Fg%2F11fxw250rf?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <FaMapMarkerAlt
              // style={{ color: "black", height: "30px", width: "30px" }}
              />
            </a>
          </div>
        </div>

        {/* <div
        // style={{
        //   width: "50%",
        //   display: "grid",
        //   gridTemplateColumns:
        //     "200px 200px 200px 200px 200px 200px 200px 200px",
        //   gridTemplateRows: "1px 50px 99px",
        //   backgroundColor: "yellow",
        // }}
        ></div> */}
      </header>

      <nav
        style={{
          color: "white",
          backgroundColor: "#254D70",
          gap: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
        id="nav"
      >
        <NavLink
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
