import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export interface Thread$UncaughtExceptionHandler extends Object{
    uncaughtException(arg0: Thread, arg1: Throwable): void;
}