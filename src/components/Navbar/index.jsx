import { useState, React } from 'react'
import {
//   useColorMode,
  Flex,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Avatar,
  Center,
  Image
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai"
import  ColorModeSwitcher from '../Navbar/ColorModeSwitcher.jsx'
import coopercat from '../../images/coopercat.png'
import logoUniftec from '../../images/logo.png'


export const Navbar = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  const name = JSON.parse(localStorage.getItem('login')).token.name
  //console.log(localStorage.getItem('login'))
  return (
    <div>
    <Flex>
      <Flex
        position="fixed"
        align="center"
        backgroundColor={'#118C4F'}
        w="100%"
        justifyContent={'flex-end'}
        pr={5}
        pl={5}
        zIndex={999}
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

            <Menu>
            <MenuButton
            variant="ghost"
            aria-label="Conta"
            _hover={{
                bg: '#118C4F',
              }}
            color={'white'}
            my={3}
            w="150%"
            as={Button}>
                Conta
            </MenuButton>
            <MenuList alignItems={'center'}>
            <br />
            <Center>
            <Avatar
                      size={'xl'}
                      src={coopercat}
                      alt="Cooperativa"
            />
            </Center>
            <br />
            <Text mb='8px' ml={3} mr={3}>{name} </Text>
                <Link to={'/logout'} ><MenuItem><AiOutlineUser mr={3}/>Logout</MenuItem></Link>
            </MenuList>
            </Menu>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <ColorModeSwitcher />
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
