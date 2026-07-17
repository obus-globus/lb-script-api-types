import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParallelMapTransform$Container } from '../../../../net/minecraft/util/thread/ParallelMapTransform$Container.d.ts'
import type { ParallelMapTransform$SplitterBase } from '../../../../net/minecraft/util/thread/ParallelMapTransform$SplitterBase.d.ts'
export class ParallelMapTransform$SingleTaskSplitter<K extends unknown, U extends unknown, V extends unknown> extends ParallelMapTransform$SplitterBase<K, U, V> {
    private constructor(operation: (param0: K, param1: U) => V, size: number)
    batchSize(index: number): number;
    scheduleBatch(container: ParallelMapTransform$Container<K, U, V>, startIndex: number, endIndex: number, executor: Executor): CompletableFuture<Object>;
    scheduleFinalOperation(allTasksDone: CompletableFuture<Object>, container: ParallelMapTransform$Container<K, U, V>): CompletableFuture<JavaMap<K, V>>;
}