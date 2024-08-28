import { deleteEmployeeAPI } from '@/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useDeleteEmployee() {
  const queryClient = useQueryClient();

  const { mutate: deleteEmployee, isPending } = useMutation({
    mutationFn: (id: string) => deleteEmployeeAPI(id),
    mutationKey: ['delete-employee'],
    onSuccess: () => {
      toast.success('Employee delete successfully!');
      queryClient.invalidateQueries({queryKey: ['employees']});
    },
    onError: (err) => {
      toast.error('Failed to delete employee!', {
        description: err.message,
      });
    },
  });

  return { deleteEmployee, isPending };
}