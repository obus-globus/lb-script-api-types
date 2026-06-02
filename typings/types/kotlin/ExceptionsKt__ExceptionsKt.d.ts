import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class ExceptionsKt__ExceptionsKt extends Object {
    static addSuppressed(paramarg0: Throwable, paramarg1: Throwable): void;
    static getStackTrace(paramarg0: Throwable): (Object | null)[];
    static getSuppressedExceptions(paramarg0: Throwable): Throwable[];
    static stackTraceToString(paramarg0: Throwable): string;
}