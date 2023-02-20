import type { Card } from "../models/card";
import { Box, Center, Circle, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { editingCardState, editingCardValueSelecting } from "../states/atoms";

export const CardView = () => {
  const card = useRecoilValue(editingCardState);
  const isCardSelecting = useRecoilValue(editingCardValueSelecting);
  return (
    <Flex
      width="332px"
      height="462px"
      padding="12px"
      border="1px"
      rounded="16px"
    >
      <Center
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
        height="100%"
        backgroundColor="white"
        border="4px"
        borderColor="green.300"
        rounded="28px"
      >
        <Flex justifyContent="space-between" width="100%">
          <Box
            margin="-4px"
            width="60px"
            height="60px"
            backgroundColor="yellow"
            border="2px"
            rounded="8px"
            zIndex={1}
          >
            <Center h="100%">
              <Text fontSize={32} fontWeight="bold">
                {card.cost ?? "13"}
              </Text>
            </Center>
          </Box>
          <Box
            margin="-4px"
            marginRight="0px"
            w="60px"
            h="60px"
            border="2px"
            rounded="100%"
            backgroundColor="orange"
            zIndex={1}
          ></Box>
        </Flex>
        <Box h="32px" w="100%" backgroundColor="green.300">
          <Center h="100%">
            <Text fontSize="24px" fontWeight="bold">
              {card.title ?? "小惑星採掘組合"}
            </Text>
          </Center>
        </Box>
        <Box h="200px" w="100%" backgroundColor="orange.200"></Box>
        <Flex justifyContent="space-between" margin="16px">
          <Box w="60%">
            {card.text ??
              `条件: チタンの産出量 1 以上。\n効果: チタン産出量 +1`}
          </Box>
          <Box>
            {card.victoryPoint ?? (
              <Box h="82px" w="82px" border="4px" rounded="100%" backgroundColor="orange.600">
                <Center h="100%">
                  <Text fontSize={48} fontWeight="bold">
                    {card.victoryPoint ?? 1}
                  </Text>
                </Center>
              </Box>
            )}
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
};
