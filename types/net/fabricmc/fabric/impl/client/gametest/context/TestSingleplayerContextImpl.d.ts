import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { TestClientLevelContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestClientLevelContext.d.ts'
import type { TestServerContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestServerContext.d.ts'
import type { TestSingleplayerContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestSingleplayerContext.d.ts'
import type { TestWorldSave } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/world/TestWorldSave.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export class TestSingleplayerContextImpl extends Object implements TestSingleplayerContext {
    constructor(arg0: ClientGameTestContext, arg1: TestWorldSave, arg2: MinecraftServer)
    readonly clientLevel: TestClientLevelContext;
    // private context: ClientGameTestContext;
    readonly server: TestServerContext;
    readonly worldSave: TestWorldSave;
    close(): void;
    getClientLevel(): TestClientLevelContext;
    getServer(): TestServerContext;
    getWorldSave(): TestWorldSave;
}