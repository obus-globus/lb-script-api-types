import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { CopyableThrowable } from '../../kotlinx/coroutines/CopyableThrowable.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class TimeoutCancellationException extends CancellationException implements CopyableThrowable<TimeoutCancellationException> {
    constructor(message: string)
    constructor(message: string, coroutine: Job | null)
    coroutine: Job | null;
    createCopy(): TimeoutCancellationException;
}