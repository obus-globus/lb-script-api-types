import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { TestClientLevelContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestClientLevelContext.d.ts'
import type { TestServerConnection } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestServerConnection.d.ts'
export class TestServerConnectionImpl extends Object implements TestServerConnection {
    constructor(arg0: ClientGameTestContext, arg1: TestClientLevelContext)
    readonly clientLevel: TestClientLevelContext;
    // private context: ClientGameTestContext;
    close(): void;
    getClientLevel(): TestClientLevelContext;
}