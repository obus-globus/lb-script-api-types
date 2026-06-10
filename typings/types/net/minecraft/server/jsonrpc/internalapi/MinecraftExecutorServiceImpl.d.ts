import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { MinecraftExecutorService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftExecutorService.d.ts'
export class MinecraftExecutorServiceImpl extends Object implements MinecraftExecutorService {
    constructor(server: DedicatedServer)
    // private server: DedicatedServer;
    submit(runnable: () => void): CompletableFuture<void>;
    submit<V extends Object | number | string | boolean>(supplier: () => V): CompletableFuture<V>;
}