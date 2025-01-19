import { useQuery } from '@tanstack/react-query';
import { getAccountTransactions } from '@/api/handlers';

export const useAccountTransactions = (accountId: number) => {
  return useQuery({
    queryKey: ['accountTransactions', accountId],
    queryFn: async () => {
      const { data } = await getAccountTransactions(accountId);
      return data;
    },
    enabled: Boolean(accountId),
  });
};
