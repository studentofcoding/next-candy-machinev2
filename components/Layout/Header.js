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
      <div className="mr-auto pl-3">
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
            {/* <span className="text-white ml-4"></span> */}
            <Image
              src={vv_icon}
              alt="Verdant Vtopia"
              width={60}
              height={60}
            />
            {/* <img height="60" width="60" alt="Verdant Vtopia" src="./icon_fix.png"/> */}
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

      <div className="flex lg:flex-row flex-col">
        {/* <a
          onClick={() => setMobileMenuOpen(false)}
          className="font-link block lg:inline-block px-4 py-4 mx-2 lg:mx-0 lg:ml-2 font-bold text-white bg-purple-600 rounded-full hover:bg-purple-500"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/discord-logo.svg"
            style={{ color: "#fff" }}
            height="40px"
            width="40px"
            alt="discord"
          />
        </a>
        <a
          onClick={() => setMobileMenuOpen(false)}
          className="font-link block lg:inline-block px-4 py-4 mx-2 lg:mx-0 lg:ml-2 font-bold text-white bg-purple-600 rounded-full hover:bg-purple-500"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/twitter-logo.svg"
            height="40px"
            width="40px"
            alt="twitter"
          />
        </a> */}

        <div className="mt-3 ml-3 lg:flex">
          <WalletMultiButton />
        </div>
      </div>
    </>
  );

  const mobileMenu = (
    <nav className="lg:hidden fixed right-0 bottom-0 bg-opacity-75 top-12 w-full bg-indigo-900 shadow-lg z-20 pt-12">
      {menuItems}
    </nav>
  );

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
            <button
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
            </button>

            {mobileMenuOpen ? mobileMenu : ""}

            <div className="hidden lg:flex items-center w-full " id="links">
              {menuItems}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
