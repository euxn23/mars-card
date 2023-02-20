import { atom } from "recoil";
import { ocrResults } from "../../external/ocr-results";
import { OCRResult } from "../../models/ocr";

export const ocrResultsState = atom<OCRResult[]>({
  key: "ocrResultsState",
  default: ocrResults["image-1"],
});
