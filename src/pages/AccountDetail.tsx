import { useParams } from 'react-router-dom';
import { useAccountTransactions } from '@/hooks/queries/useAccountTransactions';

function AccountDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: transactions, isLoading, error } = useAccountTransactions(Number(id));

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!transactions) return null;

  return (
    <div>
      <h1>거래 내역</h1>
      <ul>
        {transactions.transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>{transaction.date}</p>
            <p>{transaction.type}: {Math.abs(transaction.amount).toLocaleString()}원</p>
            <p>잔액: {transaction.balance.toLocaleString()}원</p>
            <p>{transaction.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountDetail; 