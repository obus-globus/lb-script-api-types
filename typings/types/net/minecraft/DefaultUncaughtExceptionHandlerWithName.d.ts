import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Logger } from '../../org/slf4j/Logger.d.ts'
export class DefaultUncaughtExceptionHandlerWithName extends Object implements Thread$UncaughtExceptionHandler {
    constructor(logger: Logger)
    // private logger: Logger;
    uncaughtException(t: Thread, e: Throwable): void;
}