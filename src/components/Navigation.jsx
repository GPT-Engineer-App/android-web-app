import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" fontSize="xl">
          Home
        </Link>
        <Link as={RouterLink} to="/listings" color="white" fontSize="xl">
          Listings
        </Link>
        <Link as={RouterLink} to="/admin" color="white" fontSize="xl">
          Admin Panel
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
