import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { chevronRight } from "../components/icons";
import fifa from "../public/images/fifa.jpg"
import godOfWar from "../public/images/god-of-war.jpg"
import asphalt from "../public/images/asphalt-9.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Microsoft</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Explore Microsoft products and services for your home or business. Shop Surface, Microsoft 365, Xbox, Windows, Azure, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <main className="flex-auto">
          <section id="intro">
            <div className="contentCenter introInner">
              <div className="w-full fixed contentCenter top-0 inset-x-0 z-20 bg-white"><Header /></div>
              <div className="swiperIntro"></div>
              <div className="toolsDiv">
                <Link href="/">
                  <a className="tools">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"/>
                    </svg>
                    <p className="introParagraph">Buy Xbox games and consoles</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="tools">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"/>
                    </svg>
                    <p className="introParagraph">Shop Surface devices</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="tools">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/>
                    </svg>
                    <p className="introParagraph">Choose your Microsoft 365</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="tools">
                  <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
                  </svg>
                    <p className="introParagraph">Get Windows 11</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="tools">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                      <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                    </svg>
                    <p className="introParagraph">Find your next PC</p>
                  </a>
                </Link>
                <Link href="/swiper">
                  <a className="tools">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                      <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                    </svg>
                    <p className="introParagraph">Shop Business</p>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section id="news">
            <div className="contentCenter gridCardsDiv">
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Surface Laptop 4</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <div className="newsLinkDiV">
                      <p className="newsLink">Shop now</p>
                      <span className="chevronRight">{chevronRight}</span>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Xbox Stereo Headset</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <div className="newsLinkDiV">
                      <p className="newsLink">Shop now</p>
                      <span className="chevronRight">{chevronRight}</span>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Surface Pro 8</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <div className="newsLinkDiV">
                      <p className="newsLink">Shop now</p>
                      <span className="chevronRight">{chevronRight}</span>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Business cards from Microsoft</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <div className="newsLinkDiV">
                      <p className="newsLink">Shop now</p>
                      <span className="chevronRight">{chevronRight}</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </section>
          <section id="sales" className="my-[60px] hidden">
            <div className="contentCenter">
              <div className="salesContainer">
                <div className="w-full salesContent text-white">
                  <div className="flex flex-col gap-[24px]">
                    <p className="text-[24px] leading-[28px] font-medium">Get your first 3 months for 1$</p>
                    <p className="text-[15px] max-w-[440px]">Unlock hundreds of great games and more for just 1$ when you join Xbox Game Pass Ultimate or PC Game Pass. Offer available to new subscribers only</p>
                    <div className="flex items-center gap-[32px]">
                      <div className="bg-white text-black font-medium">
                        <p className="py-[8px] px-[20px]">Join PC Game Pass</p>
                      </div>
                      <div>
                        <p className="font-medium">Join PC Game Pass Ultimate</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="relative w-full h-full">
                    <Image src={fifa} alt="game-image" layout="fill" objectFit="cover" />
                  </div>
                  <div className="relative w-full h-full">
                    <Image src={godOfWar} alt="game-image" layout="fill" objectFit="cover" />
                  </div>
                  <div className="relative w-full h-full">
                    <Image src={asphalt} alt="game-image" layout="fill" objectFit="cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="business">
            <div className="contentCenter">
              <p className="text-[24px] font-medium my-[24px]">For business</p>
            </div>
            <div className="contentCenter gridCardsDiv">
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Surface Laptop 2 Go for Business</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <div className="newsLinkDiV">
                      <p className="newsLink">Shop now</p>
                      <span className="chevronRight">{chevronRight}</span>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Get Microsoft teams for free</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <div className="newsLinkDiV">
                      <p className="newsLink">Shop now</p>
                      <span className="chevronRight">{chevronRight}</span>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Windows 365</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <div className="newsLinkDiV">
                      <p className="newsLink">Shop now</p>
                      <span className="chevronRight">{chevronRight}</span>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Small Business Resource Center</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <div className="newsLinkDiV">
                      <p className="newsLink">Shop now</p>
                      <span className="chevronRight">{chevronRight}</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </section>
          <section id="info" className="my-[60px]">
            <div className="contentCenter">
              <div className="infoContainer"></div>
            </div>
          </section>
          <section id="follow" className="mb-[48px]">
            <div className="contentCenter flex justify-center sm:justify-start items-center gap-[12px]">
              <p className="followMicrosoft">Follow Microsoft</p>
              <div className="flex items-center gap-[12px]">
                <Link href="/">
                  <a className="w-[28px] h-[28px] opacity-80 hover:opacity-100 transition duration-300 bg-blue-800 flex justify-center items-center">
                    <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="white">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  </a>
                </Link>
                <Link href="/">
                  <a className="w-[28px] h-[28px] opacity-80 hover:opacity-100 transition duration-300 bg-blue-500 flex justify-center items-center">
                    <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>
                  </a>
                </Link>
                <Link href="/">
                  <a className="w-[28px] h-[28px] opacity-80 hover:opacity-100 transition duration-300 bg-blue-700 flex justify-center items-center">
                    <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  ) 
}