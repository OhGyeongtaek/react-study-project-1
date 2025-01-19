import { axiosInstance } from './axios';
import type {
  ExchangeRateResponse,
  AccountsResponse,
  TransactionsResponse,
} from '@/types/api';

// 환율 정보 조회
export const getExchangeRates = () => {
  return axiosInstance.get<ExchangeRateResponse>('/exchange-rates');
};

// 계좌 목록 조회
export const getAccounts = () => {
  return axiosInstance.get<AccountsResponse>('/accounts');
};

// 계좌 거래내역 조회
export const getAccountTransactions = (accountId: number) => {
  return axiosInstance.get<TransactionsResponse>(
    `/accounts/${accountId}/transactions`
  );
};
