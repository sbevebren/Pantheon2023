import { useState } from "react";
// import div from "next/div";
import Image from "next/image";
import { useStateContext } from "@/context";
import { useRouter } from "next/router";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user, userinfo, setUser, setUserInfo } = useStateContext();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const router = useRouter();
  const handleLogout = () => {
    setUser(false);
    setUserInfo({});
  };

  return (
    <nav className="bg-black hover:cursor-pointer hover:transition-all transition-duration:100 transition:ease-out w-screen relative z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div
              onClick={() => {
                router.push("/");
              }}
            >
              <Image
                src="/Pantheon_Emblem_White.png"
                alt="pantheon"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
                    Home
                  </p>
                </div>
                <div
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </p>
                </div>
                {user ? (
                  <div
                    onClick={() => {
                      router.push("/profile");
                    }}
                  >
                    <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Profile
                    </p>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Login
                    </p>
                  </div>
                )}
                <div
                  onClick={() => {
                    router.push("/events");
                  }}
                >
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Events
                  </p>
                </div>
                <div
                  onClick={() => {
                    router.push("/leaderboard");
                  }}
                >
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Leaderboard
                  </p>
                </div>
{ /* <div
                  onClick={() => {
                    router.push("/sponsors");
                  }}
                >
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Sponsors
                  </p>
                </div> */}
                <div
                  onClick={() => {
                    router.push("/faq");
                  }}
                >
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    FAQs
                  </p>
                </div>
                <div
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </p>
                </div>
                {user && (
                  <div
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <p
                      onClick={handleLogout}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} `}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 sm:px-3 flex justify-evenly transition ease-in-out delay-150">
          <div>
            <div
              onClick={() => {
                router.push("/").then(() => {
                  toggleMenu();
                });
              }}
            >
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </p>
            </div>
            <div
              onClick={() => {
                router.push("/about").then(() => {
                  toggleMenu();
                });
              }}
            >
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </p>
            </div>
            {user ? (
              <div
                onClick={() => {
                  router.push("/profile").then(() => {
                    toggleMenu();
                  });
                }}
              >
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Profile
                </p>
              </div>
            ) : (
              <div
                onClick={() => {
                  router.push("/login").then(() => {
                    toggleMenu();
                  });
                }}
              >
                <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </p>
              </div>
            )}
            <div
              onClick={() => {
                router.push("/events").then(() => {
                  toggleMenu();
                });
              }}
            >
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Events
              </p>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                router.push("/leaderboard");
              }}
            >
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Leaderboard
              </p>
            </div>
{/*       <div
              onClick={() => {
                router.push("/sponsors").then(() => {
                  toggleMenu();
                });
              }}
            >
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sponsors
              </p>
            </div> */}
            <div
              onClick={() => {
                router.push("/faq").then(() => {
                  toggleMenu();
                });
              }}
            >
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                FAQs
              </p>
            </div>
            <div
              onClick={() => {
                router.push("/contact").then(() => {
                  toggleMenu();
                });
              }}
            >
              <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </p>
            </div>
            {user && (
              <div
                onClick={() => {
                  router.push("/").then(() => {
                    toggleMenu();
                  });
                }}
              >
                <p
                  onClick={handleLogout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
