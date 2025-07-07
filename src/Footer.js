import "./Footer.css";
import mglogo from "./img/mg_logo.svg";
import blog from "./img/blog.png";
import insta from "./img/insta.png";
import pin from "./img/pin.png";

function Footer() {
  return (
    <div>
      <div className="footer-line">
        <div className="footer-body">
          <img src={mglogo} alt="mglogo" className="logo-img-mg" />
          <a
            href="https://blog.naver.com/thedncb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blog} alt="blog" className="logo-img-blog" />
          </a>
          <a
            href="https://kr.pinterest.com/thedncb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pin} alt="pin" className="logo-img-pin" />
          </a>
          <a
            href="https://www.instagram.com/thednc.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="insta" className="logo-img-insta" />
          </a>
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-title">더디앤씨 & 디앤씨북스</div>
        <div className="footer-text">
          서울시 마포구 월드컵북로5가길 8-15(서교동 448-14) 3층
          <br /> 대표전화. 02-792-5444|팩스. 02-792-5482
          <br />
          이메일. kimki@thednc.co.kr
          <br />
          copyright thednc all right reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
