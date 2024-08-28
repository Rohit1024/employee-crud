import { Toaster } from "sonner"
import QueryClientProvider from "./components/query-client-provider"
import Layout from "./layout"
import { Dashboard } from "./pages/dashboard"
import HomePage from "./pages/home"

function App() {

  return (
    <QueryClientProvider>
      <Layout>
        <Dashboard />
      </Layout>
      <Toaster/>
    </QueryClientProvider>
  )
}

export default App
