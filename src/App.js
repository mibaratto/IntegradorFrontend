import { Router } from "./routes/Router"
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles';


export default function App() {
  return (
    <ChakraProvider theme ={theme}>
      <Router />
    </ChakraProvider>
  );
}

