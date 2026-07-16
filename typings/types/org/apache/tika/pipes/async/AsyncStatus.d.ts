import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PipesResult$STATUS } from '../../../../../org/apache/tika/pipes/PipesResult$STATUS.d.ts'
import type { AsyncStatus$ASYNC_STATUS } from '../../../../../org/apache/tika/pipes/async/AsyncStatus$ASYNC_STATUS.d.ts'
import type { TotalCountResult } from '../../../../../org/apache/tika/pipes/pipesiterator/TotalCountResult.d.ts'
export class AsyncStatus extends Object {
    constructor()
    readonly asyncStatus: AsyncStatus$ASYNC_STATUS;
    readonly crashMessage: string;
    readonly lastUpdate: Instant;
    readonly started: Instant;
    readonly statusCounts: Map<PipesResult$STATUS, number>;
    readonly totalCountResult: TotalCountResult;
    getAsyncStatus(): AsyncStatus$ASYNC_STATUS;
    getCrashMessage(): string;
    getLastUpdate(): Instant;
    getStarted(): Instant;
    getStatusCounts(): Map<PipesResult$STATUS, number>;
    getTotalCountResult(): TotalCountResult;
    toString(): string;
    update(arg0: Map<PipesResult$STATUS, number>, arg1: TotalCountResult, arg2: AsyncStatus$ASYNC_STATUS): void;
    updateCrash(arg0: string): void;
}