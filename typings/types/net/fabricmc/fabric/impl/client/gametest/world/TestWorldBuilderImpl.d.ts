import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { TestDedicatedServerContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestDedicatedServerContext.d.ts'
import type { TestSingleplayerContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestSingleplayerContext.d.ts'
import type { TestWorldBuilder } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/world/TestWorldBuilder.d.ts'
import type { WorldCreationUiState } from '../../../../../../../net/minecraft/client/gui/screens/worldselection/WorldCreationUiState.d.ts'
export class TestWorldBuilderImpl extends Object implements TestWorldBuilder {
    constructor(arg0: ClientGameTestContext)
    // private context: ClientGameTestContext;
    // private settingsAdjustor: (param0: WorldCreationUiState) => void;
    // private useConsistentSettings: boolean;
    adjustSettings(arg0: (param0: WorldCreationUiState) => void): TestWorldBuilder;
    create(): TestSingleplayerContext;
    createServer(): TestDedicatedServerContext;
    createServer(): TestDedicatedServerContext;
    createServer(arg0: Properties): TestDedicatedServerContext;
    // private navigateCreateWorldScreen(): Path[];
    setUseConsistentSettings(arg0: boolean): TestWorldBuilder;
}