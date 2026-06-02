import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TestScreenshotComparisonAlgorithm$RawImage } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm$RawImage.d.ts'
import type { Vector2i } from '../../../../../../../../org/joml/Vector2i.d.ts'
export interface TestScreenshotComparisonAlgorithm extends Object{
    findColor(arg0: TestScreenshotComparisonAlgorithm$RawImage<number[]>, arg1: TestScreenshotComparisonAlgorithm$RawImage<number[]>): Vector2i;
    findGrayscale(arg0: TestScreenshotComparisonAlgorithm$RawImage<number[]>, arg1: TestScreenshotComparisonAlgorithm$RawImage<number[]>): Vector2i;
}