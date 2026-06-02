import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface TestScreenshotCommonOptions<SELF extends TestScreenshotCommonOptions<SELF>> extends Object{
    disableCounterPrefix(): SELF;
    withDeltaTicks(arg0: number): SELF;
    withDestinationDir(arg0: Path[]): SELF;
    withSize(arg0: number, arg1: number): SELF;
}