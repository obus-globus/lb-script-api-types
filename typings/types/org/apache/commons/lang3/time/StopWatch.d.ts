import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FailableRunnable } from '../../../../../org/apache/commons/lang3/function/FailableRunnable.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
import type { StopWatch$SplitState } from '../../../../../org/apache/commons/lang3/time/StopWatch$SplitState.d.ts'
import type { StopWatch$State } from '../../../../../org/apache/commons/lang3/time/StopWatch$State.d.ts'
export class StopWatch extends Object {
    static create(): StopWatch;
    static createStarted(): StopWatch;
    constructor()
    constructor(arg0: string)
    readonly message: string;
    // private runningState: StopWatch$State;
    // private splitState: StopWatch$SplitState;
    readonly startInstant: Instant;
    // private startTimeNanos: number;
    readonly stopInstant: Instant;
    // private stopTimeNanos: number;
    formatSplitTime(): string;
    formatTime(): string;
    get<T extends Object | number | string | boolean>(arg0: () => T): T;
    getDuration(): Duration;
    getMessage(): string;
    getNanoTime(): number;
    getSplitDuration(): Duration;
    getSplitNanoTime(): number;
    getSplitTime(): number;
    getStartInstant(): Instant;
    getStartTime(): number;
    getStopInstant(): Instant;
    getStopTime(): number;
    getT<T extends Object | number | string | boolean, E extends Throwable>(arg0: () => T): T;
    getTime(): number;
    getTime(arg0: TimeUnit): number;
    isStarted(): boolean;
    isStopped(): boolean;
    isSuspended(): boolean;
    // private nanosToMillis(arg0: number): number;
    reset(): void;
    resume(): void;
    run(arg0: () => void): void;
    runT<E extends Throwable>(arg0: () => void): void;
    split(): void;
    start(): void;
    // private startResume(): void;
    stop(): void;
    suspend(): void;
    toSplitString(): string;
    toString(): string;
    unsplit(): void;
}