import { useQuery } from '@tanstack/react-query';
import { getExchangeRates } from '@/api/handlers';

export const useExchangeRates = () => {
  return useQuery({
    queryKey: ['exchangeRates'],
    queryFn: async () => {
      const { data } = await getExchangeRates();
      return data;
    },
  });
};
