import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParallelMapTransform extends Object {
    static schedule(paraminput: Map<Object | null, Object | null>, paramoperation: (param0: Object | null, param1: Object | null) => Object | null, parammaxTaskCount: number, paramexecutor: Executor): CompletableFuture<Map<Object | null, Object | null>>;
    static schedule(paraminput: Map<Object | null, Object | null>, paramoperation: (param0: Object | null, param1: Object | null) => Object | null, paramexecutor: Executor): CompletableFuture<Map<Object | null, Object | null>>;
    constructor()
}