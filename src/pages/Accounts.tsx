import { Link } from 'react-router-dom';
import { useAccounts } from '@/hooks/queries/useAccounts';

function Accounts() {
  const { data: accounts, isLoading, error } = useAccounts();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!accounts) return null;

  return (
    <div>
      <h1>계좌 목록</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            <Link to={`/accounts/${account.id}`}>
              {account.bankName} - {account.nickname}
              <br />
              잔액: {account.balance.toLocaleString()}원
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accounts; 