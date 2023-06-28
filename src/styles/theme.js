import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    components: {
      Button: {
        variants: {
          login:{
          },
          form: {
            width: "100%",
            bg: "gray",
            borderRadius:'25px'
          }
        }
      }
    },
    colors: {
      gray: {
        500: "#EDEDED"
      }
    }
  })