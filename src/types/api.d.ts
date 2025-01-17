// 환율 관련 타입
export interface ExchangeRateResponse {
  base: 'KRW';
  timestamp: string;
  rates: {
    USD: number; // 1달러당 원화
    JPY: number; // 1엔당 원화
    EUR: number; // 1유로당 원화
    CNY: number; // 1위안당 원화
    GBP: number; // 1파운드당 원화
  };
}

// 계좌 관련 타입
export interface Account {
  id: number;
  bankName: string;
  accountNumber: string;
  balance: number;
  accountType: string;
  nickname: string;
}

export type AccountsResponse = Account[];

// 거래내역 관련 타입
export interface Transaction {
  id: string;
  date: string;
  type: '출금' | '입금';
  amount: number;
  balance: number;
  category: '식비' | '교통' | '쇼핑' | '의료' | '교육' | '여가' | '주거';
  description: string;
  merchantName: string;
}

export interface TransactionsResponse {
  accountId: number;
  transactions: Transaction[];
}
