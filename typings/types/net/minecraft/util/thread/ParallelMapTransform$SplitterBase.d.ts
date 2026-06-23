import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParallelMapTransform$Container } from '../../../../net/minecraft/util/thread/ParallelMapTransform$Container.d.ts'
export abstract class ParallelMapTransform$SplitterBase<K extends unknown, U extends unknown, V extends unknown> extends Object {
    private constructor(operation: (param0: K, param1: U) => V, size: number, taskCount: number)
    // private batchIndex: number;
    // private container: ParallelMapTransform$Container<K, U, V>;
    // private currentIndex: number;
    // private lastScheduledIndex: number;
    // private tasks: CompletableFuture<Object>[];
    batchSize(index: number): number;
    // private pendingBatchSize(): number;
    scheduleBatch(container: ParallelMapTransform$Container<K, U, V>, startIndex: number, endIndex: number, executor: Executor): CompletableFuture<Object>;
    scheduleFinalOperation(allTasksDone: CompletableFuture<Object>, container: ParallelMapTransform$Container<K, U, V>): CompletableFuture<Map<K, V>>;
    scheduleTasks(input: Map<K, U>, executor: Executor): CompletableFuture<Map<K, V>>;
}