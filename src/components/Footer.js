import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return <footer>
    <p>Copyright &copy;{currentYear} Jinwook Jung, All Rights Reserved.</p>
  </footer>;
}

export default Footer;