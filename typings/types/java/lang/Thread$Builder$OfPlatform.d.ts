import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { Thread$Builder } from '../../java/lang/Thread$Builder.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ThreadGroup } from '../../java/lang/ThreadGroup.d.ts'
import type { ThreadFactory } from '../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export interface Thread$Builder$OfPlatform extends Thread$Builder, Object {
    daemon(): Thread$Builder$OfPlatform;
    daemon(arg0: boolean): Thread$Builder$OfPlatform;
    factory(): ThreadFactory;
    group(arg0: ThreadGroup): Thread$Builder$OfPlatform;
    inheritInheritableThreadLocals(arg0: boolean): Thread$Builder$OfPlatform;
    name(arg0: string): Thread$Builder$OfPlatform;
    name(arg0: string, arg1: number): Thread$Builder$OfPlatform;
    priority(arg0: number): Thread$Builder$OfPlatform;
    stackSize(arg0: number): Thread$Builder$OfPlatform;
    start(arg0: () => void): Thread;
    uncaughtExceptionHandler(arg0: (param0: Thread, param1: Throwable) => void): Thread$Builder$OfPlatform;
    unstarted(arg0: () => void): Thread;
}