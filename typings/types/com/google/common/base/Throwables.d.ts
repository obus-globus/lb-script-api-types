import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class Throwables extends Object {
    static getCausalChain(paramthrowable: Throwable): Throwable[];
    static getCauseAs(paramthrowable: Throwable, paramexpectedCauseType: Class<Throwable>): Throwable | null;
    static getRootCause(paramthrowable: Throwable): Throwable;
    static getStackTraceAsString(paramthrowable: Throwable): string;
    static lazyStackTrace(paramthrowable: Throwable): StackTraceElement[];
    static lazyStackTraceIsLazy(): boolean;
    static propagate(paramthrowable: Throwable): RuntimeException;
    static propagateIfInstanceOf(paramthrowable: Throwable, paramdeclaredType: Class<Throwable>): void;
    static propagateIfPossible(paramthrowable: Throwable, paramdeclaredType: Class<Throwable>): void;
    static propagateIfPossible(paramthrowable: Throwable, paramdeclaredType1: Class<Throwable>, paramdeclaredType2: Class<Throwable>): void;
    static propagateIfPossible(paramthrowable: Throwable): void;
    static throwIfInstanceOf(paramthrowable: Throwable, paramdeclaredType: Class<Throwable>): void;
    static throwIfUnchecked(paramthrowable: Throwable): void;
    private constructor()
}