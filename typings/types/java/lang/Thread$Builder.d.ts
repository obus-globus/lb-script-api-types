import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ThreadFactory } from '../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export interface Thread$Builder extends Object {
    factory(): ThreadFactory;
    inheritInheritableThreadLocals(arg0: boolean): Thread$Builder;
    name(arg0: string): Thread$Builder;
    name(arg0: string, arg1: number): Thread$Builder;
    start(arg0: () => void): Thread;
    uncaughtExceptionHandler(arg0: (param0: Thread, param1: Throwable) => void): Thread$Builder;
    unstarted(arg0: () => void): Thread;
}