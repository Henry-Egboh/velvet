import Footer from "../components/footer";
import Nav from "../components/nav";

const WebPagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default WebPagesLayout;
