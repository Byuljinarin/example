import Header from "../Header";
import Footer from "../Footer";
import "../css/about.css";

function About() {
  const handleDownload = () => {
    // 임시로 빈 파일을 다운로드하는 예시
    // 실제로는 서버에서 파일을 가져와야 합니다
    const link = document.createElement("a");
    link.href = "/file/2021_thednc.pdf"; // 실제 파일 경로로 변경 필요
    link.download = "더디앤씨_회사소개서.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div className="body">
        <div className="about-container">
          디자인으로 문화를 바꿀 수 있을까?
          <br />
          더디앤씨는 이 물음에서 출발합니다.
          <br />
          <br />
          우리의 생각을 디자인으로 옮기고,
          <br />
          이를 일상의 문화로 만들어나갑니다.
          <br />
          <br />
          디자인을 통해 우리 사회의 변화를 돕고
          <br />
          새로운 문화를 정착시키는 일, 더디앤씨가 합니다.
          <br />
          <br />
          <span className="download-link" onClick={handleDownload}>
            회사 소개서 다운로드
          </span>
        </div>
      </div>
      <div className="about-body">
        <div className="about-container">
          <div className="about-body-bigtitle">파트너</div>
          <div className="about-body-title">국내 및 글로벌기업, 기관</div>
          <div className="about-body-content">
            한살림, 헨켈코리아, KBS N, CTS기독교TV, 한국자산관리공사, JTI코리아,
            포르쉐클럽코리아, 한국능률협회컨설팅, 아웃도어글로벌, 평화저널,
            <br />
            한국국제의료협회, 서울재활병원, 한국투자저축은행, <br />
            비상교육, 동행복권, 바이오메카닉스, 쎌바이오텍
            <br />
          </div>
          <div className="about-body-title">정부 및 공공기관</div>
          <div className="about-body-content">
            서울특별시, 국립현대미술관, 한국보건산업진흥원, 한국문화관광연구원,
            한국임업진흥원, 한국교육환경보호원, 한국국제보건의료재단,
            한국사회보장정보원, 한국생활안전연합, 서울특별시도시재생지원센터,
            <br />
            서울시상수도사업본부, 서울시청년활동지원센터, 서울시NPO지원센터,
            동북권NPO지원센터, 서울시어르신돌봄종사자지원센터,
            서울시마을공동체종합지원센터, 서울시청년허브, 서울혁신파크,
            서울디자인재단, 서울산업진흥원,
            <br />
            서울창업허브, 서울자유시민대학, 국민권익위원회, 대구광역시청년센터,
            서대문50플러스센터, 동대문구마을자치센터, 안산시 청년공간 상상대로,
            경북관광두레협력센터, 서울시장애인복지시설협회, <br />
            인천사회복지협의회, 마포구청, 국회도서관, 서울투자청, 코레일유통
            <br />
          </div>
          <div className="about-body-title">공익·교육재단 및 교육기관</div>
          <div className="about-body-content">
            교보교육재단, 생명보험사회공헌재단, 생명보험사회공헌위원회,
            아이들과미래재단,
            <br />
            대산농촌재단, 푸른나무재단, 함께일하는재단, <br />
            한베평화재단, 재단법인 숲과나눔, 한국문화재재단,
            <br />
            동북아역사재단, 제주곶자왈공유화재단, <br />
            한국원자력협력재단, 대한의학회, 대한결핵협회 <br />
            이종욱글로벌의학센터, 행복나눔재단 JA Korea, 한국대학사회봉사협의회,
            금오공과대학, <br />
            서울국제학교, 휘문고등학교
          </div>
          <div className="about-body-title">국제구호개발 및 복지기관</div>
          <div className="about-body-content">
            굿네이버스, 월드비전, 사회복지공동모금회, 사랑의장기기증운동본부,
            전국재해구호협회 희망브리지,
            <br />
            유네스코한국위원회, 엔젤스헤이븐, 지구촌나눔운동, <br />
            굿피플 인터내셔널, 국제앰네스티 한국지부, 컨선월드와이드, 구세군,
            밀알복지재단, 대한사회복지회, 은평천사원, 사단법인 프렌즈,
            더프라미스, 함께걷는아이들, 중앙아동보호전문기관, 경기도
            아동보호전문기관
            <br />
          </div>
          <div className="about-body-title">시민사회단체</div>
          <div className="about-body-content">
            희망제작소, 참여연대, 아름다운재단, 노무현재단, 민주사회를 위한
            변호사모임, 시민사회단체연대회의, 환경운동연합, 경제개혁연대,
            좋은기업지배구조연구소, 세브란스병원노동조합, 교육공동체 벗,
            인권재단사람,
            <br />
            이주배경청소년지원재단, 한국중앙자원봉사센터, 민주화운동기념사업회
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
