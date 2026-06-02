import type { AutoCloseable } from '../../../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TestClientLevelContext } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestClientLevelContext.d.ts'
import type { TestServerContext } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestServerContext.d.ts'
import type { TestWorldSave } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/world/TestWorldSave.d.ts'
export interface TestSingleplayerContext extends AutoCloseable, Object{
    close(): void;
    getClientLevel(): TestClientLevelContext;
    getServer(): TestServerContext;
    getWorldSave(): TestWorldSave;
}