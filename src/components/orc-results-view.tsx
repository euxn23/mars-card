import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { ocrResultsState } from "../states/atoms/ocr";
import { OCRResult } from "../models/ocr";

export const OCRResultsView = () => {
  const ocrResults = useRecoilValue(ocrResultsState);
  return (
    <Box display="flex" flexDirection="column" gap="8px">
      {ocrResults.map((ocrResult) => (
        <SingleOCRResultView
          key={ocrResult.block}
          block={ocrResult.block}
          text={ocrResult.text}
        />
      ))}
    </Box>
  );
};

const SingleOCRResultView = ({ block, text }: OCRResult) => (
  <Box border="1px" padding="8px" backgroundColor="green.50">
    <Text>{text}</Text>
  </Box>
);
