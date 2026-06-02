import type { AutoCloseable } from '../../../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TestServerConnection } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestServerConnection.d.ts'
import type { TestServerContext } from '../../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestServerContext.d.ts'
export interface TestDedicatedServerContext extends AutoCloseable, Object, TestServerContext{
    close(): void;
    connect(): TestServerConnection;
}