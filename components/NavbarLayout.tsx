import { Box } from "@chakra-ui/layout";
import Navbar from "./Navbar";

const NavbarLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Navbar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
    </Box>
  );
};
export default NavbarLayout;