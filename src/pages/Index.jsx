import { useState } from "react";
import { Container, VStack, HStack, Text, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Welcome to Home Rent App</Text>
        <Button colorScheme="teal" onClick={() => navigate("/listings")}>
          View Listings
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
