const Contact = () => {
  return (
    <>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.1322880927814!2d83.36766087525308!3d27.68827477619343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968924ee2f33a3%3A0x40bc5cb604665862!2sSainamaina%20Parroha%20Parameshwar%20Model%20Secondary%20School!5e1!3m2!1sen!2snp!4v1750736280644!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div style={{ paddingLeft: "50px" }}>
          <h1>Contact Us</h1>

          <form
            style={{
              border: "2px black solid",
              height: "300px",
              paddingTop: "60px",
            }}
          >
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                <input type="text" placeholder="*Name" id="Name" name="Name" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="*Address"
                  id="Address"
                  name="Address"
                />
              </div>
            </div>
            <br></br>
            <div style={{ gap: "30px", display: "flex" }}>
              <div>
                <input
                  type="email"
                  placeholder="*Email"
                  id="Email"
                  name="Email"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="*Phone-Number"
                  id="P.N"
                  name="P.N"
                />
              </div>
            </div>
            <br></br>
            <div>
              <textarea placeholder="*Send Message"></textarea>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <button
                type="submit"
                style={{ backgroundColor: " rgb(37, 77, 112)", color: "white" }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
