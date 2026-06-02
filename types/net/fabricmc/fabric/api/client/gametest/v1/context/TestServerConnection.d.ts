import type { AutoCloseable } from '../../../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TestClientLevelContext } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestClientLevelContext.d.ts'
export interface TestServerConnection extends AutoCloseable, Object{
    close(): void;
    getClientLevel(): TestClientLevelContext;
}