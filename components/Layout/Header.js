import React, { useState } from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Head from "next/head";
import Image from 'next/image'
import vv_icon from '../../public/icon_fix.png'
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = (
    <>
      <div className="mr-auto pl-3 hidden-mobile">
        <Link
          passHref
          href="https://mint.verdantvtopia.art/"
          className="hover:cursor-pointer"
        >
          <a
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-5 font-monstmedium text-white block uppercase lg:inline-block px-4 lg:mr-2 hover:text-indigo-500"
          >
            <Image
              src={vv_icon}
              alt="Verdant Vtopia"
              width={60}
              height={60}
            />
          </a>
        </Link>
        <Link passHref href="/" className="hover:cursor-pointer">
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-monstmedium text-white block uppercase lg:inline-block px-4 lg:mr-2 hover:text-indigo-500"
          ></a>
        </Link>
        <Link passHref href="/" className="hover:cursor-pointer">
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-monstmedium text-white block uppercase lg:inline-block px-4 lg:mr-2 hover:text-indigo-500"
          ></a>
        </Link>
      </div>

      <div className="flex lg:flex-row flex-col centered-mobile">
        <div className="mt-3 ml-3 lg:flex">
          <WalletMultiButton />
        </div>
      </div>
    </>
  );

  // const mobileMenu = (
  //   <nav className="fixed right-0 bottom-0 bg-opacity-25 top-12 w-full bg-menu shadow-lg z-20 pt-12">
  //     {menuItems}
  //   </nav>
  // );

  return (
    <>
      <Head>
        <title>Verdant Vtopia Minting Site</title>
        <meta name="description" content="Collection of 4444 detailed and beautiful architectural NFT with staking to get $VERDANT." />
        <link rel="icon" href="/icon_fix.png" />
      </Head>

      <div id="header" className="w-full z-10 absolute top-0 ">
        <div>
          <div className="container mx-auto flex justify-between items-center px-4 h-14 lg:h-16 ">
            {/* <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button> */}

            {/* {mobileMenuOpen ? mobileMenu : ""} */}

            <div className="lg:flex mx-auto centered-mobile items-center w-full " id="links">
              {menuItems}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
