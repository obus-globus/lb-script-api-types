import type { Path } from '../../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { TestSingleplayerContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestSingleplayerContext.d.ts'
import type { TestWorldSave } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/world/TestWorldSave.d.ts'
export class TestWorldSaveImpl extends Object implements TestWorldSave {
    constructor(arg0: ClientGameTestContext, arg1: Path[])
    // private context: ClientGameTestContext;
    readonly saveDirectory: Path[];
    getSaveDirectory(): Path[];
    open(): TestSingleplayerContext;
}