import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface TestScreenshotComparisonAlgorithm$RawImage<DATA extends Object | number | string | boolean> extends Object{
    data(): DATA;
    height(): number;
    width(): number;
}