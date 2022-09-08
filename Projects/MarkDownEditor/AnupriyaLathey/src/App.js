import React, { useState } from 'react';
import { ChakraProvider, theme, Textarea, Text } from '@chakra-ui/react';
import Title from './components/Title';
import ReactMarkdown from 'react-markdown';

function App() {
  const [input, setInput] = useState('');
  const [show, setShow] = useState(true);

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setInput(inputValue);
  };
  return (
    <ChakraProvider theme={theme}>
      <Title />
      <Text mb="8px" py="3" px="2">
        MARKDOWN:
      </Text>
      <Textarea
        input={input}
        onChange={handleInputChange}
        placeholder="Enter your markdown here!"
        size="md"
        px="2"
      />
      <Text mb="8px" py="3" px="2">
        HTML:
      </Text>

      <div>{show && <ReactMarkdown>{input}</ReactMarkdown>} </div>
    </ChakraProvider>
  );
}

export default App;
