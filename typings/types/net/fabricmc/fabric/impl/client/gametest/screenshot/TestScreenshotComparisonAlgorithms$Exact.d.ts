import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { TestScreenshotComparisonAlgorithm } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm.d.ts'
import type { TestScreenshotComparisonAlgorithm$RawImage } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm$RawImage.d.ts'
import type { Vector2i } from '../../../../../../../org/joml/Vector2i.d.ts'
export class TestScreenshotComparisonAlgorithms$Exact extends Enum<TestScreenshotComparisonAlgorithms$Exact> implements TestScreenshotComparisonAlgorithm {
    static INSTANCE: TestScreenshotComparisonAlgorithms$Exact;
    static defaultAlgorithm(): TestScreenshotComparisonAlgorithm;
    static exact(): TestScreenshotComparisonAlgorithm;
    static meanSquaredDifference(paramarg0: number): TestScreenshotComparisonAlgorithm;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TestScreenshotComparisonAlgorithms$Exact;
    static values(): (Object | null)[];
    private constructor()
    findColor(arg0: TestScreenshotComparisonAlgorithm$RawImage<number[]>, arg1: TestScreenshotComparisonAlgorithm$RawImage<number[]>): Vector2i;
    findGrayscale(arg0: TestScreenshotComparisonAlgorithm$RawImage<number[]>, arg1: TestScreenshotComparisonAlgorithm$RawImage<number[]>): Vector2i;
    name(): "INSTANCE";
}