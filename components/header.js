import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/ms-logo.png"
import { cartIcon, chevronDown, signIn, zoomIcon } from "./icons";

export default function Header() {
  return (
    <header>
      <div className="max-w-[1280px] w-full mx-auto px-[20px] text-[11.5px] tracking-[0.3px] hidden md:flex justify-between">
        <div className="flex items-center space-x-[16px]">
          <div className="headerLogo">
            <Link href="/">
              <a>
                <div className="relative w-[100px] h-[20px]"><Image src={logo} alt="headerLogo" layout="fill" objectFit="cover" /></div>
              </a>
            </Link>
          </div>
          <div className="headerNav flex items-center">
            <Link href="/">
              <a className="mx-[8px] mt-[16px] mb-[12px]">Microsoft 365</a>
            </Link>
            <Link href="/">
              <a className="mx-[8px] mt-[16px] mb-[12px]">Office</a>
            </Link>
            <Link href="/">
              <a className="mx-[8px] mt-[16px] mb-[12px]">Windows</a>
            </Link>
            <Link href="/">
              <a className="mx-[8px] mt-[16px] mb-[12px]">Surface</a>
            </Link>
            <Link href="/">
              <a className="mx-[8px] mt-[16px] mb-[12px]">Xbox</a>
            </Link>
            <Link href="/">
              <a className="mx-[8px] mt-[16px] mb-[12px]">Deals</a>
            </Link>
            <Link href="/">
              <a className="mx-[8px] mt-[16px] mb-[12px] yetimLink">Small Business</a>
            </Link>
            <Link href="/">
              <a className="mx-[8px] mt-[16px] mb-[12px] yetimLink">Support</a>
            </Link>
            <div>
            <div className="moreLink flex items-center space-x-[3px] mt-[16px] mb-[12px] cursor-pointer">
              <p>More</p>
              <span>{chevronDown}</span>
            </div>
            {/* <div></div> */}
          </div>
          </div>
        </div>
        <div className="flex items-center space-x-[12px]">
          <div>
            <div className="headerLink flex items-center space-x-[3px] mt-[16px] mb-[12px] cursor-pointer">
              <p>All Microsoft</p>
              <span>{chevronDown}</span>
            </div>
            {/* <div></div> */}
          </div>
          <div className="headerLink flex items-center space-x-[4px] mt-[16px] mb-[12px] cursor-pointer">
            <p className="addingLinks">Search</p>
            <span className="zoomIcon">{zoomIcon}</span>
          </div>
          <div className="headerLink flex items-center space-x-[6px] mt-[16px] mb-[12px] cursor-pointer">
            <p className="addingLinks">Cart</p>
            <span>{cartIcon}</span>
          </div>
          <div className="headerLink flex items-center space-x-[6px] mt-[16px] mb-[12px] cursor-pointer">
            <p className="addingLinks">Sign in</p>
            <span className="signInIcon">{signIn}</span>
          </div>
        </div>
      </div>
      <div className="mobileHeader md:hidden flex justify-center items-center h-[50px] border border-black">
        <div className="absolute left-[20px] flex items-center space-x-[12px]">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="zoomIcon">{zoomIcon}</span>
        </div>
        <div className="headerLogo">
          <Link href="/">
            <a>
              <div className="relative w-[100px] h-[20px]"><Image src={logo} alt="headerLogo" layout="fill" objectFit="cover" /></div>
            </a>
          </Link>
        </div>
        <div className="absolute right-[20px] flex items-center space-x-[12px]">
          <span>{cartIcon}</span>
          <span className="signInIcon">{signIn}</span>
        </div>
      </div>
    </header>  
  )  
}