import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>홈</h1>
      <nav>
        <ul>
          <li><Link to="/exchange">환율 정보</Link></li>
          <li><Link to="/accounts">계좌 목록</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home; 