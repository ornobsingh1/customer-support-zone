import Container from "./Container";

const Footer = () => {
  return (
    <div className="pt-12 px-6 bg-black mt-3">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              CS — Ticket System
            </h2>
            <p className="text-gray-400 mt-2">
              Ticket System organizes customer requests, tracks issues, and
              ensures faster support responses for improved satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Company</h3>
            <ul className="flex flex-col gap-3 text-gray-400 mt-2">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Services</h3>
            <ul className="flex flex-col gap-3 text-gray-400 mt-2">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Information</h3>
            <ul className="flex flex-col gap-3 text-gray-400 mt-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Social Links</h3>
            <ul className="flex flex-col gap-3 text-gray-400 mt-2">
              <li>
                <i className="fa-brands fa-x-twitter"></i>@CS — Ticket System
              </li>
              <li>
                <i className="fa-brands fa-linkedin-in"></i>@CS — Ticket System
              </li>
              <li>
                <i className="fa-brands fa-facebook-f"></i>@CS — Ticket System
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>support@cst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-t border-gray-600 my-6"></div>
        <div>
          <p className="text-white text-center pb-4">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
