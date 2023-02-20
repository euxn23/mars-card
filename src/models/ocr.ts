export type OCRResult = {
  block: number;
  text: string;
};

export type OCRResults = { [imageKey: string]: OCRResult[] };
