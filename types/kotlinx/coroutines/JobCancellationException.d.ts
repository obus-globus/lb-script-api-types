import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CopyableThrowable } from '../../kotlinx/coroutines/CopyableThrowable.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class JobCancellationException extends CancellationException implements CopyableThrowable<JobCancellationException> {
    constructor(message: string, cause: Throwable | null, job: Job)
    // private _job: Job | null;
    /*not mapped: */ getJob$kotlinx_coroutines_core(): Job;
    createCopy(): JobCancellationException | null;
    equals(other: Object | null): boolean;
    fillInStackTrace(): Throwable;
    hashCode(): number;
    toString(): string;
}