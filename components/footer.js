import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div className="contentCenter text-[11px]">
        <div className="footerInner1 pt-[36px]">
          <div>
            <p className="footerTitle">What&apos;s new</p>
            <div className="flex flex-col justify-start mt-[4px]">
              <Link href="/">
                <a className="hover:underline py-[8px]">Surface Laptop Go 2</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Surface Pro 8</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Surface Laptop Studio</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Surface Pro X</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Surface Go 3</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Surface Duo 2</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Surface Pro 7+</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Windows 11 apps</a>
              </Link>
            </div>
          </div>
          <div>
            <p className="footerTitle">Microsoft Store</p>
            <div className="flex flex-col justify-start mt-[4px]">
              <Link href="/">
                <a className="hover:underline py-[8px]">Account Profile</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Download Center</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Store support</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Returns</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Order tracking</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Virtual workshops and training</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Store Promise</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Flexible Payments</a>
              </Link>
            </div>
          </div>
          <div>
            <p className="footerTitle">Education</p>
            <div className="flex flex-col justify-start mt-[4px]">
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft in education</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Devices for education</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Teams for Education</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft 365 Education</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft consultation appointment</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Educator training and development</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Deals for students and parents</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Azure for students</a>
              </Link>
            </div>
          </div>
          <div>
            <p className="footerTitle">Business</p>
            <div className="flex flex-col justify-start mt-[4px]">
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Cloud</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Security</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Dynamics 365</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft 365</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Power Platform</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Teams</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Industry</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Small Business</a>
              </Link>
            </div>
          </div>
          <div>
            <p className="footerTitle">Developer & IT</p>
            <div className="flex flex-col justify-start mt-[4px]">
              <Link href="/">
                <a className="hover:underline py-[8px]">Azure</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Developer Center</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Documentation</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Learn</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Microsoft Tech Community</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Azure Marketplace</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">AppSource</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Visual Studio</a>
              </Link>
            </div>
          </div>
          <div>
            <p className="footerTitle">Company</p>
            <div className="flex flex-col justify-start mt-[4px]">
              <Link href="/">
                <a className="hover:underline py-[8px]">Carrers</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">About Microsoft</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Company news</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Privacy at Microsoft</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Investors</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Diversity and inclusion</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Accessibility</a>
              </Link>
              <Link href="/">
                <a className="hover:underline py-[8px]">Sustainability</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="footerInner2 pt-[30px] pb-[16px]">
          <div className="flex items-center space-x-[12px]">
            <div className="border border-black w-[24px] h-[24px] rounded-full"></div>
            <Link href="/">
              <a className="hover:underline">English (United States)</a>
            </Link>
          </div>
          <div className="flex gap-x-[16px] gap-y-[8px] md:gap-0 flex-wrap md:space-x-[24px]">
            <Link href="/">
              <a className="hover:underline">Sitemap</a>
            </Link>
            <Link href="/">
              <a className="hover:underline">Contact Microsoft</a>
            </Link>
            <Link href="/">
              <a className="hover:underline">Privacy</a>
            </Link>
            <Link href="/">
              <a className="hover:underline">Terms of use</a>
            </Link>
            <Link href="/">
              <a className="hover:underline">Trademarks</a>
            </Link>
            <Link href="/">
              <a className="hover:underline">Safety & eco</a>
            </Link>
            <Link href="/">
              <a className="hover:underline">About our ads</a>
            </Link>
            <p>&copy; Microsoft {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>  
  )  
}