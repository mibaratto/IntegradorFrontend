import { Router } from "./routes/Router"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles';
import { GlobalStyle } from "./GlobalStyle";


export default function App() {
  return (
    <div>
      <GlobalStyle />
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </div>

  );
}

