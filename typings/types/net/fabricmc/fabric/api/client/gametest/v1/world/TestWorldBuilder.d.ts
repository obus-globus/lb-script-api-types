import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TestDedicatedServerContext } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestDedicatedServerContext.d.ts'
import type { TestSingleplayerContext } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestSingleplayerContext.d.ts'
import type { WorldCreationUiState } from '../../../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationUiState.d.ts'
export interface TestWorldBuilder extends Object {
    adjustSettings(arg0: (param0: WorldCreationUiState) => void): TestWorldBuilder;
    create(): TestSingleplayerContext;
    createServer(): TestDedicatedServerContext;
    createServer(arg0: { [key: string]: any }): TestDedicatedServerContext;
    setUseConsistentSettings(arg0: boolean): TestWorldBuilder;
}