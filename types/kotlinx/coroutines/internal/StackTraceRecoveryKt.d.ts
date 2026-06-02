import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class StackTraceRecoveryKt extends Object {
    static initCause(paramarg0: Throwable, paramarg1: Throwable): void;
    static isArtificial(paramarg0: StackTraceElement): boolean;
    static recoverAndThrow(paramarg0: Throwable, paramarg1: Continuation<Object>): Object;
    static recoverStackTrace(paramarg0: Object | null): Object | null;
    static recoverStackTrace(paramarg0: Object | null, paramarg1: Continuation<Object>): Object | null;
    static unwrap(paramarg0: Object | null): Object | null;
    static unwrapImpl(paramarg0: Object | null): Object | null;
}