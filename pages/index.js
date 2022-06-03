import Head from "next/head";
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
        <Header />
        <main className="flex-auto"></main>
        <Footer />
      </div>
    </div>
  ) 
}