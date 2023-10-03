import { ChakraProvider } from "@chakra-ui/react";
import IntervalsPage from "./pages/intervals-page";

function App() {
  return (
    <ChakraProvider>
      <IntervalsPage />
    </ChakraProvider>
  );
}

export default App;
