import type { DataFetcher$ComputationResult } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher$ComputationResult.d.ts'
import type { DataFetcher$SuccessfulComputationResult } from '../../../../../com/mojang/realmsclient/gui/task/DataFetcher$SuccessfulComputationResult.d.ts'
import type { RepeatedDelayStrategy } from '../../../../../com/mojang/realmsclient/gui/task/RepeatedDelayStrategy.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DataFetcher$Task<T extends unknown> extends Object {
    private constructor(null_: DataFetcher$Task<T>, updater: () => T, period: number, repeatStrategy: RepeatedDelayStrategy)
    // private id: string;
    // private lastResult: DataFetcher$SuccessfulComputationResult<T>;
    // private nextUpdate: number;
    // private pendingTask: CompletableFuture<DataFetcher$ComputationResult<T>>;
    // private period: number;
    // private repeatStrategy: RepeatedDelayStrategy;
    // private updater: () => T;
    reset(): void;
    // private updateIfNeeded(currentTime: number): void;
}