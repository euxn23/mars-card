import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { CardView } from "./components/card";
import { OCRResultsView } from "./components/orc-results-view";
import React from "react";

export function App() {
  return (
    <Box display="flex" margin="12px">
      <Flex width="50%" flexDirection="column">
        <Box height="50%">
          <Center>
            <Image src="/image-1.jpg" height="400px" />
          </Center>
        </Box>
        <Box height="50%">
          <Center>
            <CardView />
          </Center>
        </Box>
      </Flex>
      <Center width="50%" margin="2rem" display="flex" flexDirection="column">
        <Heading margin="24px">画像認識結果</Heading>
        <OCRResultsView />
      </Center>
    </Box>
  );
}
