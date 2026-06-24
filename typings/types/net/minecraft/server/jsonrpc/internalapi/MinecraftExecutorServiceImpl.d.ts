import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { MinecraftExecutorService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftExecutorService.d.ts'
import type { NotificationManager } from '../../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
export class MinecraftExecutorServiceImpl extends Object implements MinecraftExecutorService {
    constructor(notificationManager: NotificationManager)
    // private notificationManager: NotificationManager;
    // private server(): DedicatedServer;
    submit(runnable: () => void): CompletableFuture<void>;
    submit<V extends unknown>(supplier: () => V): CompletableFuture<V>;
}