import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-section">
            <h2>Sainamaina Secondary School</h2>
            <p>Lead the world in your own way</p>
          </div>

          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Newsletter</h3>
            <p>Get latest updates in your inbox.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          © 2025 Sainamaina Secondary School. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
