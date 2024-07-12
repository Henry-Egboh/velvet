import Footer from "../components/footer";
import NavBar from "../components/navBar";

const WebPagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        {/* <NavBar /> */}
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default WebPagesLayout;
