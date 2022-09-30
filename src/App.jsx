import { AppRouter } from './routes'
//import './assets/global.css'
import { ChakraProvider, ToastProvider } from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider>
            <ToastProvider>
            <AppRouter />
            </ToastProvider>
        </ChakraProvider>
    )
}

export default App
