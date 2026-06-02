import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TestScreenshotComparisonAlgorithm } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm.d.ts'
import type { TestScreenshotComparisonAlgorithm$RawImage } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm$RawImage.d.ts'
import type { Vector2i } from '../../../../../../../org/joml/Vector2i.d.ts'
export class TestScreenshotComparisonAlgorithms$MeanSquaredDifference extends Record implements TestScreenshotComparisonAlgorithm {
    static DEFAULT: TestScreenshotComparisonAlgorithms$MeanSquaredDifference;
    static defaultAlgorithm(): TestScreenshotComparisonAlgorithm;
    static exact(): TestScreenshotComparisonAlgorithm;
    static meanSquaredDifference(paramarg0: number): TestScreenshotComparisonAlgorithm;
    // private maxMeanSquaredDifference: number;
    equals(arg0: Object | null): boolean;
    findColor(arg0: TestScreenshotComparisonAlgorithm$RawImage<number[]>, arg1: TestScreenshotComparisonAlgorithm$RawImage<number[]>): Vector2i;
    findGrayscale(arg0: TestScreenshotComparisonAlgorithm$RawImage<number[]>, arg1: TestScreenshotComparisonAlgorithm$RawImage<number[]>): Vector2i;
    findGrayscale(arg0: TestScreenshotComparisonAlgorithm$RawImage<number[]>, arg1: TestScreenshotComparisonAlgorithm$RawImage<number[]>): Vector2i;
    hashCode(): number;
    maxMeanSquaredDifference(): number;
    toString(): string;
}