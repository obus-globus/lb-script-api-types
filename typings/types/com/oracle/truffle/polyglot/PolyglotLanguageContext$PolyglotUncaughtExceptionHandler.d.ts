import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotLanguageContext$PolyglotUncaughtExceptionHandler extends Object implements Thread$UncaughtExceptionHandler {
    private constructor(null_: PolyglotLanguageContext$PolyglotUncaughtExceptionHandler)
    uncaughtException(t: Thread, e: Throwable): void;
}