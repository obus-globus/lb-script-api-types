import type { StackTraceElement } from '../java/lang/StackTraceElement.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class ExceptionsKt__ExceptionsKt extends Object {
    static addSuppressed(self: Throwable, exception: Throwable): void;
    static getStackTrace(paramarg0: Throwable): StackTraceElement[];
    static getSuppressedExceptions(paramarg0: Throwable): Throwable[];
    static stackTraceToString(self: Throwable): string;
}