import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { TestDedicatedServerContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestDedicatedServerContext.d.ts'
import type { TestServerConnection } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestServerConnection.d.ts'
import type { TestServerContextImpl } from '../../../../../../../net/fabricmc/fabric/impl/client/gametest/context/TestServerContextImpl.d.ts'
import type { DedicatedServer } from '../../../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
export class TestDedicatedServerContextImpl extends TestServerContextImpl implements TestDedicatedServerContext {
    constructor(arg0: ClientGameTestContext, arg1: DedicatedServer)
    // private context: ClientGameTestContext;
    close(): void;
    connect(): TestServerConnection;
    // private getConnectionAddress(): string;
}