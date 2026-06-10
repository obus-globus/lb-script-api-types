import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MinecraftExecutorService extends Object {
    submit(runnable: () => void): CompletableFuture<void>;
    submit<V extends Object | number | string | boolean>(supplier: () => V): CompletableFuture<V>;
}