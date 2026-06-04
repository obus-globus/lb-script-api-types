import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { TestClientLevelContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/TestClientLevelContext.d.ts'
export class TestClientLevelContextImpl extends Object implements TestClientLevelContext {
    static DEFAULT_CHUNK_LOAD_TIMEOUT: number;
    constructor(arg0: ClientGameTestContext)
    // private context: ClientGameTestContext;
    waitForChunksDownload(): number;
    waitForChunksDownload(arg0: number): number;
    waitForChunksRender(): number;
    waitForChunksRender(arg0: boolean): number;
    waitForChunksRender(arg0: number): number;
    waitForChunksRender(arg0: boolean, arg1: number): number;
}