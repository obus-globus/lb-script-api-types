import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { Job } from '../../../../../kotlinx/coroutines/Job.d.ts'
import type { StateFlow } from '../../../../../kotlinx/coroutines/flow/StateFlow.d.ts'
import type { RetryingJob$State } from '../../../../../net/ccbluex/liquidbounce/api/core/RetryingJob$State.d.ts'
import type { RetryingJob$State$Final } from '../../../../../net/ccbluex/liquidbounce/api/core/RetryingJob$State$Final.d.ts'
export class RetryingJob<T extends unknown> extends Record {
    constructor(stateFlow: StateFlow<RetryingJob$State<T>>, producerJob: Job)
    // private producerJob: Job;
    /*not mapped: */ producerJob(): Job;
    // private stateFlow: StateFlow<RetryingJob$State<T>>;
    /*not mapped: */ stateFlow(): StateFlow<RetryingJob$State<T>>;
    component1(): StateFlow<RetryingJob$State<T>>;
    component2(): Job;
    copy(stateFlow: StateFlow<RetryingJob$State<T>>, producerJob: Job): RetryingJob<T>;
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getFinalState($completion: Continuation<RetryingJob$State$Final<T>>): any;
    getNow(): T | null;
    hashCode(): number;
    toString(): string;
}