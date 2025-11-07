import { Search } from "lucide-react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

const Navbar = () => {
    const { isMobile } = useSidebar()
  
  return (
    <>
    <header className="fixed top-0 right-0 left-0 bg-white" >
      <nav className="top-0 flex w-full mx-auto h-12 md:h-14 items-center px-3 lg:px-10 justify-between max-w-[1400px]">
        {/* logo */}
        <a href="/" className="text-3xl font-bold">
          Mys<span className="text-primary uppercase">h</span>op
        </a>
        {/* Menu principale */}
         { !isMobile && <ul className="flex items-center gap-x-15 ">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-primary  hover:text-primary"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-foreground hover:text-primary"
            >
              Boutique
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-foreground hover:text-primary"
            >
              A propos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-foreground hover:text-primary"
            >
              Contact
            </a>
          </li>
        </ul>}
        {/* menu de reaction  */}
        <div className="flex gap-6 items-center">
          <div className="hidden lg:flex items-center gap-2 relative">
            <input
              className=" border-primary/80 pl-2 py-1 border-2 pr-8 focus:border-primary focus:outline-none rounded-full"
              type="text"
              name="text"
              placeholder="Recherche ..."
              id="search"
            />
            <button className="absolute right-1 text-background text-xl cursor-pointer bg-primary w-7 h-7 flex items-center justify-center rounded-full">
              <Search size={16} />
            </button>
          </div>
          <a href="#" className="text-foreground text-2xl">
            <GoHeartFill />
          </a>
          <a href="#" className="text-foreground text-2xl">
            <HiShoppingBag />
          </a>
           { isMobile && <SidebarTrigger className="flex  text-foreground text-2xl cursor-pointer hover:bg-transparent" />}
        </div>
      </nav>
    </header>
    <hr className="h-12 md:h-14"/>
    </>
  );
};

export default Navbar;
