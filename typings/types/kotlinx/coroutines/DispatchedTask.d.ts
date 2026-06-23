import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Task } from '../../kotlinx/coroutines/scheduling/Task.d.ts'
export abstract class DispatchedTask<T extends unknown> extends Task {
    constructor(resumeMode: number)
    /*not mapped: */ getDelegate$kotlinx_coroutines_core(): Continuation<T>;
    resumeMode: number;
    cancelCompletedResult(takenState: Object | null, cause: Throwable): void;
    getExceptionalResult(state: Object | null): Throwable | null;
    getSuccessfulResult(state: Object | null): T;
    handleFatalException(exception: Throwable): void;
    run(): void;
    takeState(): Object | null;
}