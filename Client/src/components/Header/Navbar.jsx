import { motion } from "framer-motion";
import React from "react";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { IoIosSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { IoIosCart } from "react-icons/io";

const navigation = [
  { name: "All Products", href: "#", current: true },
  { name: "Pages", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Roasted Coffee", href: "#", current: false },
  { name: "All collections", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Framer Motion Variants for the Sidebar
const sidebarVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "100%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="p-[10px] px-[0px] bg-[#262626] lg:bg-transparent fixed w-full z-50 max-[765px]:p-[0px]"
    >
      {({ open }) => (
        <>
          {/* Dark overlay for the rest of the site */}
          {open && (
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out z-40"></div>
          )}

          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1 items-center lg:items-stretch">
                <div className="flex shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="/Coffee.png"
                    className="h-8 w-auto max-[765px]:h-5"
                  />
                </div>
              </div>

              {/* Mobile view icons (Search, Account, Language, etc.) */}
              <div className="flex lg:hidden items-center justify-end space-x-4 m-10 max-[765px]:space-x-2">
                <IoIosSearch className="h-[40px] w-[40px] text-gray-300 hover:text-white cursor-pointer rounded-full border-[1px] p-2 max-[765px]:h-[30px] max-[765px]:w-[30px] max-[765px]:border-0 max-[765px]:p-0" />
                <MdAccountCircle className="h-[40px] w-[40px] text-gray-300 hover:text-white cursor-pointer rounded-full border-[1px] p-2 max-[765px]:h-[30px] max-[765px]:w-[30px] max-[765px]:border-0 max-[765px]:p-0" />
                <RiGlobalLine className="h-[40px] w-[40px] text-gray-300 hover:text-white cursor-pointer rounded-full border-[1px] p-2 max-[765px]:h-[30px] max-[765px]:w-[30px] max-[765px]:border-0 max-[765px]:p-0" />
                <div className="text-gray-300 rounded-full border border-white px-4 py-2 text-[14px] hover:text-white transition duration-300 cursor-pointer max-[765px]:border-0  max-[765px]:font-bold max-[765px]:px-2 max-[765px]:py-1 max-[765px]:text-[12px]">
                  USD
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-white rounded-full border border-white px-4 py-2 cursor-pointer transition duration-300 max-[765px]:border-0 max-[765px]:px-2 max-[765px]:py-1 max-[765px]:space-x-1">
                  <IoIosCart className="h-[24px] w-[24px] max-[765px]:h-[20px] max-[765px]:w-[20px]" />
                  <span className="text-sm font-medium max-[765px]:text-xs">
                    0 Items
                  </span>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden justify-end">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </DisclosureButton>
              </div>

              {/* Desktop Navigation Links and Icons */}
              <div className="hidden lg:flex lg:ml-auto font-outfit text-xs">
                <div className="flex justify-end space-x-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "text-white after:content-[''] after:block after:w-full after:h-0.5 after:bg-white after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                          : "text-white hover:after:scale-x-100 hover:text-white after:content-[''] after:block after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                        "rounded-md px-2 pb-[.5rem] pt-[1rem] font-medium relative"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <IoIosSearch className="h-[35px] w-[35px] text-gray-300 hover:text-white cursor-pointer rounded-full border-[1px] p-2" />
                  <MdAccountCircle className="h-[35px] w-[35px] text-gray-300 hover:text-white cursor-pointer rounded-full border-[1px] p-2" />
                  <RiGlobalLine className="h-[35px] w-[35px] text-gray-300 hover:text-white cursor-pointer rounded-full border-[1px] p-2" />
                  <button className="rounded-full border-[1px] text-white px-4 py-[11px]">
                    USD
                  </button>
                  <div className="flex items-center space-x-2 text-white hover:cursor-pointer rounded-full border-[1px] px-2 py-[2px]">
                    <IoIosCart className="h-8 w-8" />
                    <p className="text-[13px]">0 Items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel (Sidebar) */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate={open ? "visible" : "exit"}
            exit="exit"
            className="lg:hidden fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform z-50"
          >
            {/* Close Button in Top Left */}
            <div className="flex justify-start p-4 bg-[#262626]">
              <Disclosure.Button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                >
                  <path
                    fill="#ffffff"
                    d="M19.95 16.75l-.05-.4-1.2-1-5.2-4.2c-.1-.05-.3-.2-.6-.5l-.7-.55c-.15-.1-.5-.45-1-1.1l-.1-.1c.2-.15.4-.35.6-.55l1.95-1.85 1.1-1c1-1 1.7-1.65 2.1-1.9l.5-.35c.4-.25.65-.45.75-.45.2-.15.45-.35.65-.6s.3-.5.3-.7l-.3-.65c-.55.2-1.2.65-2.05 1.35-.85.75-1.65 1.55-2.5 2.5-.8.9-1.6 1.65-2.4 2.3-.8.65-1.4.95-1.9 1-.15 0-1.5-1.05-4.1-3.2C3.1 2.6 1.45 1.2.7.55L.45.1c-.1.05-.2.15-.3.3C.05.55 0 .7 0 .85l.05.35.05.4 1.2 1 5.2 4.15c.1.05.3.2.6.5l.7.6c.15.1.5.45 1 1.1l.1.1c-.2.15-.4.35-.6.55l-1.95 1.85-1.1 1c-1 1-1.7 1.65-2.1 1.9l-.5.35c-.4.25-.65.45-.75.45-.25.15-.45.35-.65.6-.15.3-.25.55-.25.75l.3.65c.55-.2 1.2-.65 2.05-1.35.85-.75 1.65-1.55 2.5-2.5.8-.9 1.6-1.65 2.4-2.3.8-.65 1.4-.95 1.9-1 .15 0 1.5 1.05 4.1 3.2 2.6 2.15 4.3 3.55 5.05 4.2l.2.45c.1-.05.2-.15.3-.3.1-.15.15-.3.15-.45z"
                  ></path>
                </svg>
              </Disclosure.Button>
            </div>

            {/* Navigation Items */}
            <div className="space-y-1 px-4 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-200",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </Disclosure>
  );
}
