import { useState, React } from 'react'
import {
  useColorMode,
  Flex,
  Button,
  IconButton,
  Image
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import  ColorModeSwitcher from '../Navbar/ColorModeSwitcher.jsx'
import logoUniftec from '../../images/logo.png'


export const NavbarLogin = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (
    <div>
      <Flex
        position="fixed"
        align="center"
        backgroundColor={'#118C4F'}
        w="100%"
        justifyContent={'flex-end'}
        pr={5}
        pl={5}
        zIndex={999}
        height={'65px'}
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
       <Image
              borderRadius='full'
              boxSize='45px'
              src={logoUniftec}
              alt='Logo Uniftec'
              position={'fixed'}
              left={3}
              top={2.5}
              />
        <ColorModeSwitcher/>
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
            <Button
              as="a"
              variant="ghost"
              aria-label="Inicio"
              my={5}
              w="100%"
            >
              Início
                    </Button>

            <Button
              as="a"
              variant="ghost"
              aria-label="Cadastro"
              my={5}
              w="100%"
            >
              Cadastro
                    </Button>

            <Button
              as="a"
              variant="ghost"
              aria-label="Conta"
              my={5}
              w="100%"
            >
              Conta
            </Button>
        </Flex>
      </Flex>
    </Flex>
    </div>
  )
}
