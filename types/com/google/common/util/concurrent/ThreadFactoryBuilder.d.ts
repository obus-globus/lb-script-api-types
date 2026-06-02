import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ThreadFactoryBuilder extends Object {
    constructor()
    // private backingThreadFactory: ThreadFactory;
    // private daemon: boolean;
    // private nameFormat: string;
    // private priority: number;
    // private uncaughtExceptionHandler: (param0: Thread, param1: Throwable) => void;
    build(): ThreadFactory;
    setDaemon(daemon: boolean): ThreadFactoryBuilder;
    setNameFormat(nameFormat: string): ThreadFactoryBuilder;
    setPriority(priority: number): ThreadFactoryBuilder;
    setThreadFactory(backingThreadFactory: ThreadFactory): ThreadFactoryBuilder;
    setUncaughtExceptionHandler(uncaughtExceptionHandler: (param0: Thread, param1: Throwable) => void): ThreadFactoryBuilder;
}