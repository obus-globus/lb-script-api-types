import type { NativeImage } from '../../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Either } from '../../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { TestScreenshotComparisonAlgorithm } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm.d.ts'
import type { TestScreenshotComparisonAlgorithm$RawImage } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm$RawImage.d.ts'
import type { TestScreenshotComparisonOptions } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonOptions.d.ts'
import type { TestScreenshotCommonOptionsImpl } from '../../../../../../../net/fabricmc/fabric/impl/client/gametest/screenshot/TestScreenshotCommonOptionsImpl.d.ts'
import type { Rect2i } from '../../../../../../../net/minecraft/client/renderer/Rect2i.d.ts'
export class TestScreenshotComparisonOptionsImpl extends TestScreenshotCommonOptionsImpl<TestScreenshotComparisonOptions> implements TestScreenshotComparisonOptions {
    static of(paramarg0: NativeImage): TestScreenshotComparisonOptions;
    static of(paramarg0: string): TestScreenshotComparisonOptions;
    constructor(arg0: NativeImage)
    constructor(arg0: string)
    algorithm: TestScreenshotComparisonAlgorithm;
    grayscale: boolean;
    region: Rect2i;
    savedFileName: string;
    // private templateImage: Either<string, NativeImage>;
    getColorTemplateImage(): TestScreenshotComparisonAlgorithm$RawImage<number[]>;
    getGrayscaleTemplateImage(): TestScreenshotComparisonAlgorithm$RawImage<number[]>;
    getTemplateImagePath(): Optional<string>;
    getTemplateImagePathOrThrow(): string;
    save(): TestScreenshotComparisonOptions;
    saveWithFileName(arg0: string): TestScreenshotComparisonOptions;
    withAlgorithm(arg0: TestScreenshotComparisonAlgorithm): TestScreenshotComparisonOptions;
    withGrayscale(): TestScreenshotComparisonOptions;
    withRegion(arg0: number, arg1: number, arg2: number, arg3: number): TestScreenshotComparisonOptions;
}