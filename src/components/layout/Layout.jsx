import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuoteModal } from "./QuoteModal";

export function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <TopBar />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <QuoteModal />
    </>
  );
}