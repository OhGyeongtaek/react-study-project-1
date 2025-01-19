import { useQuery } from '@tanstack/react-query';
import { getAccounts } from '@/api/handlers';

export const useAccounts = () => {
  return useQuery({
    queryKey: ['accounts'],
    queryFn: async () => {
      const { data } = await getAccounts();
      return data;
    },
  });
};
