import { Navbar } from '../../components/Navbar/index.jsx';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Select,
    useToast
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import api from '../../services/api.jsx';


export default function Home() {
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState('')
    const [coligada, setColigada] = useState('')
    const [filial, setFilial] = useState('')

    const toast = useToast()

    const consultar = async () => {
        const response = await api.get('95112560/json/')
        
        toast({
            title: 'CEP',
            description: JSON.stringify(response.data),
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top-right'
          })
    }

    return (
        <>
        <Navbar/>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={1}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Insira os Dados
            </Heading>
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text> */}
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstDate" isRequired>
                    <FormLabel>Data Inicial</FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="date"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastDate" isRequired>
                    <FormLabel>Data Final</FormLabel>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="date"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="coligada" isRequired>
                <FormLabel>Coligada</FormLabel>
                <Select placeholder='Selecione uma Coligada' onChange={(e) => setColigada(e.target.value)} required>
                                    <option value='1' selected={ coligada === '1' ? 'selected' : null }>1</option>
                                    <option value='2' selected={ coligada === '2' ? 'selected' : null }>2</option>
                                    <option value='3' selected={ coligada === '3' ? 'selected' : null }>3</option>
                                    <option value='4' selected={ coligada === '4' ? 'selected' : null }>4</option>
                                    <option value='5' selected={ coligada === '5' ? 'selected' : null }>5</option>
                                    <option value='6' selected={ coligada === '6' ? 'selected' : null }>6</option>
                                    <option value='7' selected={ coligada === '7' ? 'selected' : null }>7</option>
                                    <option value='8' selected={ coligada === '8' ? 'selected' : null }>8</option>
                                    <option value='9' selected={ coligada === '9' ? 'selected' : null }>9</option>
                                    <option value='10' selected={ coligada === '10' ? 'selected' : null }>10</option>
                                    <option value='11' selected={ coligada === '11' ? 'selected' : null }>11</option>
                                    <option value='12' selected={ coligada === '12' ? 'selected' : null }>12</option>
                </Select> 
              </FormControl>
              <FormControl id="filial" isRequired>
                <FormLabel>Filial</FormLabel>
                <Select placeholder='Selecione uma Filial' onChange={(e) => setFilial(e.target.value)} required>
                                    <option value='1' selected={ filial === '1' ? 'selected' : null }>1</option>
                                    <option value='2' selected={ filial === '2' ? 'selected' : null }>2</option>
                                    <option value='3' selected={ filial === '3' ? 'selected' : null }>3</option>
                                    <option value='4' selected={ filial === '4' ? 'selected' : null }>4</option>
                                    <option value='5' selected={ filial === '5' ? 'selected' : null }>5</option>
                                    <option value='6' selected={ filial === '6' ? 'selected' : null }>6</option>
                                    <option value='7' selected={ filial === '7' ? 'selected' : null }>7</option>
                                    <option value='8' selected={ filial === '8' ? 'selected' : null }>8</option>
                                    <option value='9' selected={ filial === '9' ? 'selected' : null }>9</option>
                                    <option value='10' selected={ filial === '10' ? 'selected' : null }>10</option>
                                    <option value='11' selected={ filial === '11' ? 'selected' : null }>11</option>
                                    <option value='12' selected={ filial === '12' ? 'selected' : null }>12</option>
                </Select>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#118C4F'}
                  color={'white'}
                  onClick={consultar}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Enviar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </>
    );
  }