import Head from "next/head";
import Link from "next/Link";
import Footer from "../components/footer";
import Header from "../components/header";

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
            <div className="md:h-screen flex flex-col justify-between items-center contentCenter">
              <div className="w-full"><Header /></div>
              <div className="swiperIntro"></div>
              <div className="flex items-start py-[2%] space-x-[40px]">
                <Link href="/">
                  <a className="w-full flex flex-col items-center justify-center hover:underline gap-[12px]">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"/>
                    </svg>
                    <p className="introParagraph">Buy Xbox games and consoles</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="w-full flex flex-col items-center justify-center hover:underline gap-[12px]">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"/>
                    </svg>
                    <p className="introParagraph">Shop Surface devices</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="w-full flex flex-col items-center justify-center hover:underline gap-[12px]">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                      <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/>
                    </svg>
                    <p className="introParagraph">Choose your Microsoft 365</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="w-full flex flex-col items-center justify-center hover:underline gap-[12px]">
                  <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
                  </svg>
                    <p className="introParagraph">Get Windows 11</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="w-full flex flex-col items-center justify-center hover:underline gap-[12px]">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                      <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/>
                    </svg>
                    <p className="introParagraph">Find your next PC</p>
                  </a>
                </Link>
                <Link href="/">
                  <a className="w-full flex flex-col items-center justify-center hover:underline gap-[12px]">
                    <svg className="indexSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                      <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                    </svg>
                    <p className="introParagraph">Shop Business</p>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div className="contentCenter grid grid-cols-4 items-start gap-[24px]">
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Surface Laptop 4</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <Link href="/">
                      <a className="newsLink">Shop now</a>
                    </Link>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Xbox Stereo Headset</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <Link href="/">
                      <a className="newsLink">Shop now</a>
                    </Link>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Surface Pro 8</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <Link href="/">
                      <a className="newsLink">Shop now</a>
                    </Link>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-col items-start gap-[36px]">
                  <div className="newsImage"></div>
                  <div className="newsContent">
                    <p className="newsTitle">Business cards from Microsoft</p>
                    <p className="newsDescription">Do it with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
                    <Link href="/">
                      <a className="newsLink">Shop now</a>
                    </Link>
                  </div>
                </a>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  ) 
}