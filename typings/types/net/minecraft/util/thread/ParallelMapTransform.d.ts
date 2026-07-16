import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParallelMapTransform extends Object {
    static schedule<K extends unknown, U extends unknown, V extends unknown>(paraminput: Map<K, U>, paramoperation: (param0: K, param1: U) => V, parammaxTaskCount: number, paramexecutor: Executor): CompletableFuture<Map<K, V>>;
    static schedule<K extends unknown, U extends unknown, V extends unknown>(paraminput: Map<K, U>, paramoperation: (param0: K, param1: U) => V, paramexecutor: Executor): CompletableFuture<Map<K, V>>;
    constructor()
}