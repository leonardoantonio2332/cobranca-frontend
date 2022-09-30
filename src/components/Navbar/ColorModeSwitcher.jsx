import React from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'


const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const mode = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const title = mode === 'dark' ? 'Ativar Dark Mode' : 'Desativar Dark Mode'

  return (
    <IconButton
      title={title}
      aria-label={title}
      size="md"
      fontSize="lg"
      variant="ghost"
      _hover={{
        bg: '#118C4F',
      }}
      color="#FFFFFF"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  )
}

export default ColorModeSwitcher