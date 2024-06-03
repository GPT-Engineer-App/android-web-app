import React from "react";
import { Container, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Abason = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Welcome to Abason</Text>
        <Button colorScheme="teal" onClick={() => navigate("/listings")}>
          View Listings
        </Button>
      </VStack>
    </Container>
  );
};

export default Abason;
