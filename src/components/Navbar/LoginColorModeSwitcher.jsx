import React from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'


const LoginColorModeSwitcher = (props) => {
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
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  )
}

export default LoginColorModeSwitcher