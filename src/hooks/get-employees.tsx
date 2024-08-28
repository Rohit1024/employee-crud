import { fetchEmployeesAPI, fetchEmployeeByIdAPI } from '@/api'
import { useQuery } from '@tanstack/react-query';

export function useEmployees() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['employees'],
    queryFn: () => fetchEmployeesAPI(),
  });

  return { data, isLoading, error };
}

export function useEmployeesById(id: string) {
    const { data, isLoading, error } = useQuery({
      queryKey: ['employees-id', id],
      queryFn: () => fetchEmployeeByIdAPI(id),
    });
  
    return { data, isLoading, error };
  }