import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ThrowableUtil extends Object {
    static addSuppressed(paramarg0: Throwable, paramarg1: Throwable): void;
    static addSuppressed(paramarg0: Throwable, paramarg1: Throwable[]): void;
    static addSuppressedAndClear(paramarg0: Throwable, paramarg1: Throwable[]): void;
    static getSuppressed(paramarg0: Throwable): (Object | null)[];
    static haveSuppressed(): boolean;
    static interruptAndAttachAsyncStackTrace(paramarg0: Thread, paramarg1: Throwable): void;
    static stackTraceToString(paramarg0: Throwable): string;
    static unknownStackTrace(paramarg0: Throwable | null, paramarg1: Class<Object>, paramarg2: string): Throwable | null;
    private constructor()
}