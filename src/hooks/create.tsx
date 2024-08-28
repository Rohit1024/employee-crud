import { createEmployeeAPI } from '@/api';
import { Employee } from '@/schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useCreateEmployee() {
  const queryClient = useQueryClient();

  const { mutate: createEmployee, isPending, error } = useMutation({
    mutationFn: (data: Employee) => createEmployeeAPI(data),
    mutationKey: ['create-employee'],
    onSuccess: () => {
      toast.success('Employee created successfully!');
      queryClient.invalidateQueries({queryKey: ['employees']});
    },
    onError: (err) => {
      toast.error('Failed to create employee!', {
        description: err.message,
      });
    },
  });

  return { createEmployee, isPending, error };
}