import { http, HttpResponse } from 'msw';
import { API_BASE_URL } from '@/constants/api';
import { BANKS } from '@/constants/bank';
import { TRANSACTION_CATEGORIES } from '@/constants/transaction';
import type {
  ExchangeRateResponse,
  AccountsResponse,
  TransactionsResponse,
  Transaction,
} from '@/types/api';

// 환율 계산을 위한 유틸리티 함수 (원화 기준)
const getRandomExchangeRate = (min: number, max: number) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

export const handlers = [
  // 1. 나라별 환율 API
  http.get(`${API_BASE_URL}/exchange-rates`, () => {
    return HttpResponse.json<ExchangeRateResponse>({
      base: 'KRW',
      timestamp: new Date().toISOString(),
      rates: {
        USD: getRandomExchangeRate(1300, 1350),
        JPY: getRandomExchangeRate(8.5, 9.5),
        EUR: getRandomExchangeRate(1400, 1450),
        CNY: getRandomExchangeRate(180, 190),
        GBP: getRandomExchangeRate(1600, 1650),
      },
    });
  }),

  // 2. 사용자 계좌 정보 API
  http.get(`${API_BASE_URL}/accounts`, () => {
    return HttpResponse.json<AccountsResponse>([
      {
        id: 1,
        bankName: '신한은행',
        accountNumber: '110-123-456789',
        balance: 1250000,
        accountType: '입출금통장',
        nickname: '생활비통장',
      },
      {
        id: 2,
        bankName: '국민은행',
        accountNumber: '457-89-123456',
        balance: 3750000,
        accountType: '저축예금',
        nickname: '비상금통장',
      },
      {
        id: 3,
        bankName: '우리은행',
        accountNumber: '1002-789-456123',
        balance: 8900000,
        accountType: '급여통장',
        nickname: '월급통장',
      },
    ]);
  }),

  // 3. 계좌 거래내역 상세 조회 API
  http.get(`${API_BASE_URL}/accounts/:id/transactions`, ({ params }) => {
    const { id } = params;
    const transactions: Transaction[] = Array.from(
      { length: 20 },
      (_, index) => {
        const isWithdrawal = Math.random() > 0.5;
        const amount = Math.floor(Math.random() * 500000) + 1000;
        const date = new Date();
        date.setDate(date.getDate() - index);

        return {
          id: `tx-${id}-${index}`,
          date: date.toISOString(),
          type: isWithdrawal ? '출금' : '입금',
          amount: isWithdrawal ? -amount : amount,
          balance: 1000000 + (isWithdrawal ? -amount : amount),
          category:
            TRANSACTION_CATEGORIES[
              Math.floor(Math.random() * TRANSACTION_CATEGORIES.length)
            ],
          description: isWithdrawal
            ? `${BANKS[Math.floor(Math.random() * BANKS.length)]} ATM 출금`
            : '급여입금 (주)테스트기업',
          merchantName: isWithdrawal ? '편의점' : '(주)테스트기업',
        };
      }
    );

    return HttpResponse.json<TransactionsResponse>({
      accountId: Number(id),
      transactions,
    });
  }),
];
