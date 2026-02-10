import Container from "./Container";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white">
        <Container>
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="md:text-2xl font-bold">CS — Ticket System</a>
          </div>
          <div className="navbar-end">
            <div className="mr-4 hidden md:block">
              <ul className="flex justify-center items-center gap-4">
                <li>
                  <a className="text-[16px] cursor-pointer text-gray-600">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[16px] cursor-pointer text-gray-600">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-[16px] cursor-pointer text-gray-600">
                    Changelog
                  </a>
                </li>
                <li>
                  <a className="text-[16px] cursor-pointer text-gray-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-[16px] cursor-pointer text-gray-600">
                    Download
                  </a>
                </li>
                <li>
                  <a className="text-[16px] cursor-pointer text-gray-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a className="btn font-semibold bg-linear-to-r from-purple-600 to-purple-400 text-white">
              <i className="fa-solid fa-plus"></i> New Ticket
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
