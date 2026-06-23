import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PreparableReloadListener$PreparationBarrier extends Object{
    wait<T extends unknown>(t: T): CompletableFuture<T>;
}