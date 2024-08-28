import { updateEmployeeAPI } from '@/api';
import { Employee } from '@/schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useUpdateEmployee() {
  const queryClient = useQueryClient();

  const { mutate: updateEmployee, isPending, error } = useMutation({
    mutationFn: ({ employeeId, employee } : { employeeId: string, employee: Employee }) => updateEmployeeAPI(employeeId, employee),
    mutationKey: ['update-employee'],
    onSuccess: () => {
      toast.success('Employee updated successfully!');
      queryClient.invalidateQueries({queryKey: ['employees']});
    },
    onError: (err) => {
      toast.error('Failed to update employee!', {
        description: err.message,
      });
    },
  });

  return { updateEmployee, isPending, error };
}