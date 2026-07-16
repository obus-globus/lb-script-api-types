import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class Throwables extends Object {
    static getCausalChain(paramthrowable: Throwable): Throwable[];
    static getCauseAs<X extends Throwable>(paramthrowable: Throwable, paramexpectedCauseType: Class<X>): X;
    static getRootCause(paramthrowable: Throwable): Throwable;
    static getStackTraceAsString(paramthrowable: Throwable): string;
    static lazyStackTrace(paramthrowable: Throwable): StackTraceElement[];
    static lazyStackTraceIsLazy(): boolean;
    static propagate(paramthrowable: Throwable): RuntimeException;
    static propagateIfInstanceOf<X extends Throwable>(paramthrowable: Throwable, paramdeclaredType: Class<X>): void;
    static propagateIfPossible<X extends Throwable>(paramthrowable: Throwable, paramdeclaredType: Class<X>): void;
    static propagateIfPossible<X1 extends Throwable, X2 extends Throwable>(paramthrowable: Throwable, paramdeclaredType1: Class<X1>, paramdeclaredType2: Class<X2>): void;
    static propagateIfPossible(paramthrowable: Throwable): void;
    static throwIfInstanceOf<X extends Throwable>(paramthrowable: Throwable, paramdeclaredType: Class<X>): void;
    static throwIfUnchecked(paramthrowable: Throwable): void;
    private constructor()
}