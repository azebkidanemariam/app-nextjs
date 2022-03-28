import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import NavbarLayout from "../components/NavbarLayout";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <NavbarLayout>
        <Component {...pageProps} />
      </NavbarLayout>
    </ChakraProvider>
  );
};

export default MyApp;
