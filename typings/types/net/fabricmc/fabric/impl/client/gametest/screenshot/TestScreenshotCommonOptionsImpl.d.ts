import type { Path } from '../../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TestScreenshotCommonOptions } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/screenshot/TestScreenshotCommonOptions.d.ts'
import type { Vector2i } from '../../../../../../../org/joml/Vector2i.d.ts'
export abstract class TestScreenshotCommonOptionsImpl<SELF extends TestScreenshotCommonOptions<SELF>> extends Object implements TestScreenshotCommonOptions<SELF> {
    constructor()
    counterPrefix: boolean;
    deltaTicks: number;
    destinationDir: Path;
    size: Vector2i;
    disableCounterPrefix(): SELF;
    // private getThis(): SELF;
    withDeltaTicks(arg0: number): SELF;
    withDestinationDir(arg0: Path): SELF;
    withSize(arg0: number, arg1: number): SELF;
}