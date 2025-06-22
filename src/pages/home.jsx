import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{
          paddingLeft: "700px",
        }}
      >
        <h1>Welcome To</h1>
        <h5>Sainamaina Secondary School</h5>
      </div>
      <div style={{ display: "flex", paddingTop: "100px", gap: "300px" }}>
        <div>
          <p style={{ color: "orange" }}>
            Sainamaina +2 offers Science, Management, and HM programs.
          </p>
          <h1 style={{ fontSize: "50px" }}>
            Welcome to Sainamaina Secondary School
          </h1>
          <p>
            The fundamental vision and mission of Sainamaina Secondary School
            revolve around nurturing children with the ability to lead in our
            ever-innovative global community. Since 2031 B.S, numerous
            individuals have flourished educationally through our exceptional
            guidance and comprehensive cultivation.
          </p>
        </div>
        <div>
          <img
            src="https://scontent.fbwa5-2.fna.fbcdn.net/v/t39.30808-6/493996154_122102213312876153_5239759432152878732_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xJ2myatDX-kQ7kNvwEpUE2W&_nc_oc=AdmPIDlc4aIxEb_oLfa9x-x6TUbgdivNeAIJ0Wizs_ztQcnib1l1T3ckCFj3KB-v_Ik&_nc_zt=23&_nc_ht=scontent.fbwa5-2.fna&_nc_gid=kO9jiJ7CNDwydZ4T2dnbbw&oh=00_AfPAumsDD7-02maF3W5mhI4rZrRN-h9bR7QXuQFjfLOhyg&oe=685D3262"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
      <div>
        <div id="message">
          <h1>Our Message</h1>
          <h5>School Management</h5>
        </div>
      </div>
    </>
  );
};

export default Home;
