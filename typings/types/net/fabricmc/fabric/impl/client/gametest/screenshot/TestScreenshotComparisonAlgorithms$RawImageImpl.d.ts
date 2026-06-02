import type { NativeImage } from '../../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TestScreenshotComparisonAlgorithm$RawImage } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm$RawImage.d.ts'
export class TestScreenshotComparisonAlgorithms$RawImageImpl<DATA extends Object | number | string | boolean> extends Record implements TestScreenshotComparisonAlgorithm$RawImage<DATA> {
    static fromColorNativeImage(paramarg0: NativeImage): TestScreenshotComparisonAlgorithm$RawImage<number[]>;
    static fromGrayscaleNativeImage(paramarg0: NativeImage): TestScreenshotComparisonAlgorithm$RawImage<number[]>;
    static toColor(paramarg0: TestScreenshotComparisonAlgorithm$RawImage<number[]>): TestScreenshotComparisonAlgorithm$RawImage<number[]>;
    // private data: DATA;
    // private height: number;
    // private width: number;
    data(): DATA;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    height(): number;
    toString(): string;
    width(): number;
}