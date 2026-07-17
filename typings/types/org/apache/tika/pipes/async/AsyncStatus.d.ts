import type { JavaMap } from '../../../../../JavaMap.d.ts'
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
    readonly statusCounts: JavaMap<PipesResult$STATUS, number>;
    readonly totalCountResult: TotalCountResult;
    getAsyncStatus(): AsyncStatus$ASYNC_STATUS;
    getCrashMessage(): string;
    getLastUpdate(): Instant;
    getStarted(): Instant;
    getStatusCounts(): JavaMap<PipesResult$STATUS, number>;
    getTotalCountResult(): TotalCountResult;
    toString(): string;
    update(arg0: JavaMap<PipesResult$STATUS, number>, arg1: TotalCountResult, arg2: AsyncStatus$ASYNC_STATUS): void;
    updateCrash(arg0: string): void;
}