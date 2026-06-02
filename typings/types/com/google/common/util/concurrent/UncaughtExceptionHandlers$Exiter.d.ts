import type { UncaughtExceptionHandlers$RuntimeWrapper } from '../../../../../com/google/common/util/concurrent/UncaughtExceptionHandlers$RuntimeWrapper.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class UncaughtExceptionHandlers$Exiter extends Object implements Thread$UncaughtExceptionHandler {
    constructor(runtime: UncaughtExceptionHandlers$RuntimeWrapper)
    // private runtime: UncaughtExceptionHandlers$RuntimeWrapper;
    uncaughtException(t: Thread, e: Throwable): void;
}