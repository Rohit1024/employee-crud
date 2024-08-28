import {
    QueryClientProvider as Provider,
    QueryClient,
  } from '@tanstack/react-query';
  
  const queryClient = new QueryClient();
  
  function QueryClientProvider({ children } : { children: React.ReactNode }) {
    return <Provider client={queryClient}>{children}</Provider>;
  }
  
  export default QueryClientProvider;