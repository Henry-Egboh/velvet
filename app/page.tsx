import { Suspense } from "react";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Content from "./components/content";
import Hero from "./components/heroSection";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading Nav Bar</div>}>
      <NavBar />
      </Suspense>
      {/* split components rendered from server to client */}
      <Suspense fallback={<div>Loading hero section...</div>}>
      <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading contents...</div>}>
      <Content />
      </Suspense>
      <Suspense fallback={<div>Loading Cards...</div>}>
      <Cards />
      </Suspense>
      <Suspense fallback={<div>Loading footer...</div>}>
      <Footer />
      </Suspense>
    </main>
  );
}
