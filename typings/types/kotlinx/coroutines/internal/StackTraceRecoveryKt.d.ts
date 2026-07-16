import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class StackTraceRecoveryKt extends Object {
    static initCause(self: Throwable, cause: Throwable): void;
    static isArtificial(self: StackTraceElement): boolean;
    static recoverAndThrow(exception: Throwable): void;
    static recoverStackTrace<E extends Throwable>(exception: E): E;
    static recoverStackTrace<E extends Throwable>(exception: E, continuation: Continuation<Object>): E;
    static unwrap<E extends Throwable>(exception: E): E;
    static unwrapImpl<E extends Throwable>(exception: E): E;
}