import { useColorMode, Button, Heading, Box, Flex } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const underlineColor = { light: 'gray.500', dark: 'gray.400' };

  return (
    <Flex
      borderBottom="1px solid"
      py="2"
      borderBottomColor={underlineColor[colorMode]}
    >
      <Flex flex="1" justifyContent="flex-start">
        <Button onClick={toggleColorMode} rounded="full" h="40px" w="40px">
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Heading>MARKDOWN EDITOR</Heading>
      <Flex flex="1" justifyContent={'flex-end'}>
        <Box mr="2"></Box>
      </Flex>
    </Flex>
  );
}
export default NavBar;
