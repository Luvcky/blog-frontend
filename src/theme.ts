import { ChakraTheme, extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles: ChakraTheme["styles"] = {
    global: (props) => ({
        "html, body": {
            background: "black",
            color: "white"
        },
        "h1" : {
            fontSize: "40px"
        },
        "h2": {
            fontSize: "30px"
        },
        "code": {
            bg: '#123',
            p: 1,
            borderRadius: 'md'
        } 
    })
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme