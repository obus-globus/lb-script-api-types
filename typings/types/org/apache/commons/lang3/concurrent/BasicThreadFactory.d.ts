import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { BasicThreadFactory$Builder } from '../../../../../org/apache/commons/lang3/concurrent/BasicThreadFactory$Builder.d.ts'
export class BasicThreadFactory extends Object implements ThreadFactory {
    static builder(): BasicThreadFactory$Builder;
    constructor(arg0: BasicThreadFactory$Builder, arg1: any)
    // private daemon: boolean;
    readonly namingPattern: string;
    readonly priority: number;
    // private threadCounter: AtomicLong;
    readonly uncaughtExceptionHandler: (param0: Thread, param1: Throwable) => void;
    readonly wrappedFactory: ThreadFactory;
    getDaemonFlag(): boolean;
    getNamingPattern(): string;
    getPriority(): number;
    getThreadCount(): number;
    getUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    getWrappedFactory(): ThreadFactory;
    // private initializeThread(arg0: Thread): void;
    newThread(arg0: () => void): Thread;
}