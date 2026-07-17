import type { TestScreenshotOptions } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotOptions.d.ts'
import type { TestScreenshotCommonOptionsImpl } from '../../../../../../../net/fabricmc/fabric/impl/client/gametest/screenshot/TestScreenshotCommonOptionsImpl.d.ts'
export class TestScreenshotOptionsImpl extends TestScreenshotCommonOptionsImpl<TestScreenshotOptions> implements TestScreenshotOptions {
    constructor(arg0: string)
    name: string;
}