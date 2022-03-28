import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    LinkBox,
    LinkOverlay,
  } from "@chakra-ui/layout";
  import NextImage from "next/image";
  import {
    MdHome,
    /*   MdSearch,
    MdLibraryMusic, */
    MdFavorite,
    /* MdContacts, */
    MdChatBubbleOutline,
    MdImageSearch,
  } from "react-icons/md";
  import NextLink from "next/link";
  
  const navMenu = [
    {
      name: "Hem",
      icon: MdHome,
      route: "/Home",
    },
    {
      name: "Om oss",
      icon: MdImageSearch,
      route: "/About",
    },
    {
      name: "Kontact",
      icon: MdChatBubbleOutline,
      route: "/Contact",
    },
    {
      name: "Favoriter",
      icon: MdFavorite,
      route: "/Favorites",
    },
  ];
  
  const Navbar = () => {
    return (
      <Box
        width="100%"
        height="100vh"
        bg="black"
        /* bg="radial-gradient(#f992b7, #fcbfdb)" */
        paddingX="5px"
        color="gray"
      >
        <Box paddingY="20px">
          <Box width="120px" marginBottom="20px" paddingX="20px">
            <NextImage src="/logo.png" width={120} height={60} />
          </Box>
          <Box marginBottom="20px">
            <List spacing={2}>
              {navMenu.map((menu) => (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <NextLink href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {menu.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider color="gray.800" />
        </Box>
      </Box>
    );
  };
  export default Navbar;