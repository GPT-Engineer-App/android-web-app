import { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, IconButton, Image, Box } from "@chakra-ui/react";
import { FaAndroid, FaRocket } from "react-icons/fa";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={4}>
          <FaAndroid size="2em" />
          <Text fontSize="2xl">Android Web App</Text>
        </HStack>
        <Box width="100%" height="60vh" overflowY="auto" border="1px solid #ccc" borderRadius="md" padding={4}>
          {messages.map((message, index) => (
            <Box key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} bg={message.sender === "user" ? "blue.100" : "green.100"} borderRadius="md" padding={2} marginY={1}>
              <Text>{message.text}</Text>
            </Box>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type a message..." />
          <IconButton aria-label="Send" icon={<FaRocket />} onClick={handleSend} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
