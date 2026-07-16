import type { PrintStream } from '../../../../../java/io/PrintStream.d.ts'
import type { PrintWriter } from '../../../../../java/io/PrintWriter.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ExceptionUtils extends Object {
    static asRuntimeException<T extends RuntimeException>(paramarg0: Throwable): T;
    static forEach(paramarg0: Throwable, paramarg1: (param0: Throwable) => void): void;
    static getCause(paramarg0: Throwable): Throwable;
    static getCause(paramarg0: Throwable, paramarg1: string[]): Throwable;
    static getDefaultCauseMethodNames(): string[];
    static getMessage(paramarg0: Throwable): string;
    static getRootCause(paramarg0: Throwable): Throwable;
    static getRootCauseMessage(paramarg0: Throwable): string;
    static getRootCauseStackTrace(paramarg0: Throwable): string[];
    static getRootCauseStackTraceList(paramarg0: Throwable): string[];
    static getStackFrames(paramarg0: Throwable): string[];
    static getStackTrace(paramarg0: Throwable): string;
    static getThrowableCount(paramarg0: Throwable): number;
    static getThrowableList(paramarg0: Throwable): Throwable[];
    static getThrowables(paramarg0: Throwable): Throwable[];
    static hasCause(paramarg0: Throwable, paramarg1: Class<Throwable>): boolean;
    static indexOfThrowable(paramarg0: Throwable, paramarg1: Class<Throwable>): number;
    static indexOfThrowable(paramarg0: Throwable, paramarg1: Class<Throwable>, paramarg2: number): number;
    static indexOfType(paramarg0: Throwable, paramarg1: Class<Throwable>): number;
    static indexOfType(paramarg0: Throwable, paramarg1: Class<Throwable>, paramarg2: number): number;
    static isChecked(paramarg0: Throwable): boolean;
    static isUnchecked(paramarg0: Throwable): boolean;
    static printRootCauseStackTrace(paramarg0: Throwable): void;
    static printRootCauseStackTrace(paramarg0: Throwable, paramarg1: PrintStream): void;
    static printRootCauseStackTrace(paramarg0: Throwable, paramarg1: PrintWriter): void;
    static removeCommonFrames(paramarg0: string[], paramarg1: string[]): void;
    static rethrow<T extends unknown>(paramarg0: Throwable): T;
    static stream(paramarg0: Throwable): Stream<Throwable>;
    static throwUnchecked<T extends Throwable>(paramarg0: T): T;
    static throwUnchecked<T extends unknown>(paramarg0: T): T;
    static throwableOfThrowable<T extends Throwable>(paramarg0: Throwable, paramarg1: Class<T>): T;
    static throwableOfThrowable<T extends Throwable>(paramarg0: Throwable, paramarg1: Class<T>, paramarg2: number): T;
    static throwableOfType<T extends Throwable>(paramarg0: Throwable, paramarg1: Class<T>): T;
    static throwableOfType<T extends Throwable>(paramarg0: Throwable, paramarg1: Class<T>, paramarg2: number): T;
    static wrapAndThrow<R extends unknown>(paramarg0: Throwable): R;
    constructor()
}