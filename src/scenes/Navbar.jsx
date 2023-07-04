import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import image1 from "../assets/icons8-gran-bretagna-48.png";
import image2 from "../assets/icons8-bandiera-italiana-48.png";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  language,
  setLanguage,
}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-3`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AM</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between items-center gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={language === true ? "About" : "Su di me"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={language === true ? "Projects" : "Progetti"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={language === true ? "Gallery" : "Galleria"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={language === true ? "Contact" : "Contatti"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className=" flex flex-col   overflow-hidden">
              <div className="flex">
                <label class="inline-flex relative items-center  cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={language}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setLanguage(!language);
                    }}
                    className="w-11 h-6 bg-green-600 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                  ></div>
                  {language === true ? (
                    <span
                      role="img"
                      aria-label="Bandiera italiana"
                      className="ml-4 "
                    >
                      <img src={image1} alt="Gb" className="h-8 "></img>
                    </span>
                  ) : (
                    <span
                      role="img"
                      aria-label="Bandiera inglese"
                      className="ml-4 "
                    >
                      <img src={image2} alt="It" className="h-8 "></img>
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={language === true ? "About" : "Su di me"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={language === true ? "Projects" : "Progetti"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={language === true ? "Gallery" : "Galleria"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page={language === true ? "Contact" : "Contatti"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <div className=" flex flex-col   overflow-hidden">
                <div className="flex">
                  <label class="inline-flex relative items-center  cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={language}
                      readOnly
                    />
                    <div
                      onClick={() => {
                        setLanguage(!language);
                      }}
                      className="w-11 h-6 bg-green-600 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                    {language === true ? (
                      <span
                        role="img"
                        aria-label="Bandiera italiana"
                        className="ml-4 "
                      >
                        <img src={image1} alt="Gb" className="h-8 "></img>
                      </span>
                    ) : (
                      <span
                        role="img"
                        aria-label="Bandiera inglese"
                        className="ml-4 "
                      >
                        <img src={image2} alt="It" className="h-8 "></img>
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
