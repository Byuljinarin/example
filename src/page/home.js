import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div style={{ width: "80vw", margin: "0 auto" }}>
        <div style={{ fontSize: "48px", fontWeight: "bold" }}>
          현재 about 페이지와 그 외의 페이지(sample)만 있습니다.
          <br />
          아직 반응형웹(미디어쿼리)은 아닌 상태입니다.
        </div>
        <div style={{ paddingTop: "3vh" }}>
          <Link to="/about" style={{ textDecoration: "none", color: "#333" }}>
            <div
              style={{ cursor: "pointer", padding: "10px 0", fontSize: "36px" }}
            >
              about 페이지
            </div>
          </Link>
          <Link to="/sample" style={{ textDecoration: "none", color: "#333" }}>
            <div
              style={{ cursor: "pointer", padding: "10px 0", fontSize: "36px" }}
            >
              sample 페이지
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
