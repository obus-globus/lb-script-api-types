import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TestScreenshotCommonOptions } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotCommonOptions.d.ts'
import type { TestScreenshotComparisonAlgorithm } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotComparisonAlgorithm.d.ts'
export interface TestScreenshotComparisonOptions extends Object, TestScreenshotCommonOptions<TestScreenshotComparisonOptions>{
    save(): TestScreenshotComparisonOptions;
    saveWithFileName(arg0: string): TestScreenshotComparisonOptions;
    withAlgorithm(arg0: TestScreenshotComparisonAlgorithm): TestScreenshotComparisonOptions;
    withGrayscale(): TestScreenshotComparisonOptions;
    withRegion(arg0: number, arg1: number, arg2: number, arg3: number): TestScreenshotComparisonOptions;
}