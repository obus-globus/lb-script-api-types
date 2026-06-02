import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TestSingleplayerContext } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestSingleplayerContext.d.ts'
export interface TestWorldSave extends Object{
    getSaveDirectory(): Path[];
    open(): TestSingleplayerContext;
}