import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div
        id="home"
        style={{
          paddingLeft: "506px",
          paddingRight: "100px",
          alignItems: "center",
          paddingTop: "250px",
          color: "#E7F2E4",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>Welcome To</h1>
        <h5 style={{ fontSize: "30px", paddingRight: "30px" }}>
          Sainamaina Secondary School
        </h5>
      </div>

      <div style={{ display: "flex", paddingTop: "30px", gap: "300px" }}>
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
            style={{ height: "400px", width: "400px", borderRadius: "30px" }}
          />
        </div>
      </div>
      <div style={{ paddingTop: "70px" }}>
        <div id="message">
          <h1 style={{ color: "#F4E7E1", paddingTop: "40px" }}>Our Message</h1>
          <h5 style={{ color: "#F4E7E1" }}>School Management</h5>
          <div style={{ display: "flex", gap: "50px" }}>
            <div
              style={{
                backgroundColor: "#F4E7E1",
                height: "300px",
                width: "300px",
                margin: "50px",

                borderRadius: "10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ height: "50px", width: "50px" }}>
                  <img
                    src="/principal.jpg"
                    style={{
                      borderRadius: "200px",
                      height: "130px",
                      width: "130px",
                      padding: "10px",
                    }}
                  />
                </div>
                <div
                  style={{
                    paddingLeft: "70px",
                    height: "100px",
                    width: "150px",
                  }}
                >
                  <h4>Mr.Netralal Puri</h4>
                  <h6 style={{ color: "#4CA338" }}>Principal</h6>
                </div>
              </div>
              <div>
                <p style={{ paddingTop: "30px" }}>
                  Dear Students and Parents, Welcome to Sainamaina Located away
                  from the clatters and clamors of the city area,Sainamaina
                  Education Trust is nestled in close proximity to a blissful
                  natural ambiance.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F4E7E1",
                height: "300px",
                width: "300px",
                margin: "50px",

                borderRadius: "10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ height: "50px", width: "50px" }}>
                  <img
                    src="/chairman.jpg"
                    style={{
                      borderRadius: "200px",
                      height: "130px",
                      width: "130px",
                      padding: "10px",
                    }}
                  />
                </div>
                <div
                  style={{
                    paddingLeft: "74px",
                    height: "100px",
                    width: "150px",
                  }}
                >
                  <h4>Mr.Shivlal Bashyal</h4>
                  <h6 style={{ color: "#4CA338" }}>Chairman</h6>
                </div>
              </div>
              <div>
                <p style={{ paddingTop: "30px" }}>
                  Education is an all-time practice that can be incredibly
                  exciting when managed well first on parents’ laps, next in
                  school and then as we go on through the journey of life.
                  Education at its best should expand the mind, develop life
                  skills and build best spirit in learners.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#F4E7E1",
                height: "300px",
                width: "300px",
                margin: "50px",

                borderRadius: "10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ height: "50px", width: "50px" }}>
                  <img
                    src="/+2 co-ordinator.jpg"
                    style={{
                      borderRadius: "200px",
                      height: "130px",
                      width: "130px",
                      padding: "10px",
                    }}
                  />
                </div>
                <div
                  style={{
                    paddingLeft: "74px",
                    height: "100px",
                    width: "150px",
                  }}
                >
                  <h4>Mr.Sanjay Gautam</h4>
                  <h6 style={{ color: "#4CA338" }}>+2 Co-ordinator</h6>
                </div>
              </div>
              <div>
                <p style={{ paddingTop: "30px" }}>
                  Education is the foundation of personal and societal growth.
                  It nurtures critical thinking, fosters creativity, and
                  promotes lifelong learning. Through education, individuals
                  gain the tools to overcome challenges, contribute meaningfully
                  to their communities, and pursue opportunities for a better
                  future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
