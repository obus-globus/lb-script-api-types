import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../../../java/nio/file/Path.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
import type { DedicatedServer } from '../../../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
export class DedicatedServerImplUtil extends Object {
    static saveLevelDataTo: Path;
    static serverFuture: CompletableFuture<DedicatedServer>;
    static start(paramarg0: ClientGameTestContext, paramarg1: JavaMap<any, any>): DedicatedServer;
    private constructor()
}