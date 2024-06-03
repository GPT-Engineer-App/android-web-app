import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function AdminPanel() {
  return (
    <Box p={5}>
      <Heading>Admin Panel</Heading>
      <Text>Welcome to the admin panel. You have full access to the application.</Text>
    </Box>
  );
}

export default AdminPanel;
