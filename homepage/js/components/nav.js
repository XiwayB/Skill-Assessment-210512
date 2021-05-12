class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <nav>
    <div class="navbar navbar-expand-sm navbar-dark navbar-aon3D fixed-top" style="justify-content: space-between">
      <div>
        <a class="brand-logo" href="#">
          <img src="./assets/logo.svg" />
        </a>
        <a href="./index.html" class="link-home">
          HOME
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <div class="link-gallery">
              <a href="./show.html">GALLERY</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <div class="account-dropdown account-toggle"id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ACCOUNT
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Profile</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;
  }
}

customElements.define('navbar-component', Nav);
