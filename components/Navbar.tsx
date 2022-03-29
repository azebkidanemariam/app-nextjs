import {
    Box,
    List,
    ListItem,
    LinkBox,
    LinkOverlay,
  } from "@chakra-ui/layout";
  import NextImage from "next/image";
  import NextLink from "next/link";

  
  const navMenu = [
    {
      name: "Hem",
      route: "/Home",
    },
    {
      name: "Om oss",
      route: "/About",
    },
    {
      name: "Kontact",
      route: "/Contact",
    },
  ];
  
  const Navbar = () => {
    return (
      <Box
        width="100%"
        height="100vh"
        bg="radial-gradient(#f992b7, #fcbfdb)"
        paddingX="5px"
        color="white"
      >
        <Box paddingY="20px">
          <Box width="120px" marginBottom="20px" paddingX="20px">
            <NextImage src="/logo.svg" width={120} height={60} />
          </Box>
          <Box marginBottom="20px">
            <List spacing={2}>
              {navMenu.map((menu) => (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    );
  };
  export default Navbar;