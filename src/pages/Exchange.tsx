import { useExchangeRates } from '@/hooks/queries/useExchangeRates';

function Exchange() {
  const { data: rates, isLoading, error } = useExchangeRates();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!rates) return null;

  return (
    <div>
      <h1>환율 정보</h1>
      <div>
        <p>USD: {rates.rates.USD}원</p>
        <p>JPY: {rates.rates.JPY}원</p>
        <p>EUR: {rates.rates.EUR}원</p>
      </div>
    </div>
  );
}

export default Exchange; 