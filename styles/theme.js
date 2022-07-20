import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  components: {
    Table: {
      variants: {
        mytable: {
          tr: {
            _even: {
              background: "blackAlpha.100"
            },
            _odd:{
              background:"whiteAlpha.900"
            }
          }
        }
      }
    },
     Button: { 
       baseStyle: { 
         _focus: { 
           boxShadow: 'none' 
          } 
        } 
      }
  }
})

export default theme;