import { useState } from "react"
import { useColorMode,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    Image} from '@chakra-ui/react'
import  LoginColorModeSwitcher from '../../components/Navbar/LoginColorModeSwitcher.jsx'
import api from '../../services/api.jsx'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import "./style.css"
import ftec from "../../images/ftec.jpg"
import { useEffect } from "react"
import TESTE from '../../queries/index.jsx'
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
// import { useMutation } from '@apollo/react-hooks'
// import gql from 'graphql-tag'

export const Login = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark'
  const navigate = useNavigate();

  //const { data } = useQuery (TESTE, { variables: { token: localStorage.getItem('token') } })
  //const { loading, error, data, fetchMore } = useQuery(TESTE, {});

const TESTE = gql`
    query {
        privateInfo(token: "059517fe-78f0-49f4-80c9-c257347284f9"){
            username,
            password,
            createdAt,
        }
    }
`;

const { data, fetchMore } = useQuery(TESTE, {});
  console.log(data)

  function login (e) {
    e.preventDefault()
    api.post(`/login`, {
        user: user,
        password: password
    })
    .then (response => {
        if (response.data.success) {
            localStorage.setItem('login', JSON.stringify({
                token: response.data.success
            }))
            navigate("/");
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Login Inválido',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#118C4F',
            })
        }
    })
  }

  useEffect (() => {

  })

  return (
      <>
      {/* <LoginColorModeSwitcher
      position="fixed"
      align="center"
      w="80%"
      justifyContent={'flex-end'}
      pr={5}
      pl={5}
      zIndex={999}
      /> */}
      {/* <NavbarLogin/> */}
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={ftec}
        />
    <LoginColorModeSwitcher
      position="fixed"
      align="center"
      w="3%"
      justifyContent={'flex-begin'}
      pr={5}
      pl={5}
      zIndex={999}
      />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          {/* <Heading fontSize={'2xl'}>Sign in to your account</Heading> */}
          <FormControl id="email">
            <FormLabel>Usuário</FormLabel>
            <Input
                className={user !== "" ? "has-val input" : "input"}
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input 
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              {/* <Checkbox>Remember me</Checkbox> */}
            </Stack>
            <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'#118C4F'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Enviar
                </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
      </>
  )
  }
