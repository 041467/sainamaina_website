const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(244, 231, 225)",

          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <footer
          style={{
            backgroundColor: "rgb(244, 231, 225)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div style={{ width: "900px" }}>
            <div>
              <h2>Sainamaina Secondary School</h2>
              <h4 style={{ color: "#a4288d" }}>
                Lead the world in your own way
              </h4>
            </div>
            <div id="logoinfooter"></div>
            <br />
            <p style={{ fontWeight: "200", paddingRight: "30px" }}>
              The school operates with a dedicated team of experienced and
              qualified teachers who use effective teaching methodologies
              aligned with Nepal’s national curriculum. Equipped with essential
              facilities and a growing focus on modern educational tools,
              Sainamaina Secondary School ensures that every child receives a
              meaningful and future-focused education.
            </p>
          </div>
          <div
            style={{
              paddingRight: "105px",
              textAlign: "center",
              paddingBottom: "50px",
            }}
          >
            <h4>Some Links</h4>
            <div style={{ paddingTop: "10px" }}>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#a4288d",
                }}
              >
                Home
              </a>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <a
                href="/about"
                style={{
                  textDecoration: "none",
                  color: "#a4288d",
                }}
              >
                About
              </a>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <a
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "#a4288d",
                }}
              >
                Contact
              </a>
            </div>
          </div>
          <div
            style={{
              paddingRight: "140px",
              paddingBottom: "50px",
              textAlign: "center",
            }}
          >
            <h4 style={{}}>Address</h4>
            <div>
              <h4>Sector-1</h4>
              <p>Sainamaina-2,Rupandehi</p>
            </div>
          </div>
        </footer>
        <hr />
        <div style={{ color: "#a4288d", textAlign: "center" }}>
          © 2025 All Rights Reserved By{" "}
          <a href="/" style={{ textDecoration: "none", color: "#a4288d" }}>
            Sainamaina
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
