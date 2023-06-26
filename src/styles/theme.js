import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    components: {
      Button: {
        variants: {
          login:{
          },
          form: {
            width: "100%",
            bg: "gray"
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