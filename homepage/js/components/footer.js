class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <footer style="background-image:url(https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.aon3d.com/wp-content/themes/aon3d/html_templates/build//assets/img/curved-bg--black.png); background-color: black;">
    <div class="footer-cards">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="footer-card">
              <div class="footer-section">
                <h5>Platform</h5>
                <div class="footer-list">
                  <a href="#">Industrial 3D Printer</a>
                </div>
              </div>
              <div class="footer-section">
              <h5>Materials</h5>
                <div class="footer-list">
                  <a href="#">PEKK & Carbon-Fiber</a>
                  <a href="#">PEKK</a>
                  <a href="#">PEKK & Carbon-Fiber</a>
                  <a href="#">PEKK</a>
                  <a href="#">ULTEM™ 9085</a>
                  <a href="#">Polycarbonate</a>
                  <a href="#">Nylon (PA)</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="footer-card">
              <div class="footer-section">
                <h5>Platform</h5>
                <div class="footer-list">
                  <a href="#">Event</a>
                </div>
              </div>
              <div class="footer-section">
                <h5>Company</h5>
                <div class="footer-list">
                  <a href="#">About AON3D</a>
                  <a href="#">Careers</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="footer-card">
              <div class="footer-section">
                <div class="footer-list">
                  <a href="#">Advanced Additive Training</a>
                  <a href="#">Design for Additive Manufacturing</a>
                  <a href="#">Materials Selection</a>
                  <a href="#">Process Parameter Development</a>
                  <a href="#">Company</a>
                  <a href="#">Feedback</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="footer-card">
              <div class="footer-section">
                <h5>Subscribe</h5>
              </div>
            </div>
          </div>
        </div>
        <hr class="footer-line">

        <div class="row">
          <div class="col-md-6">
            <div class="footer-legal">
              <div>
                ©AON3D Copyright 2021. All Rights Reserved.
              </div>
            </div>
          </div>

        <div class="col-md-6">
          <div class="footer-legal-subsection">
            <a href="#">Privacy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Terms of Sale</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
