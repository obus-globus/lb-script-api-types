import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Builder } from '../../../../../org/apache/commons/lang3/builder/Builder.d.ts'
import type { BasicThreadFactory } from '../../../../../org/apache/commons/lang3/concurrent/BasicThreadFactory.d.ts'
export class BasicThreadFactory$Builder extends Object implements Builder<BasicThreadFactory> {
    constructor()
    // private daemon: boolean;
    // private exceptionHandler: (param0: Thread, param1: Throwable) => void;
    // private factory: ThreadFactory;
    // private namingPattern: string;
    // private priority: number;
    build(): BasicThreadFactory;
    daemon(): BasicThreadFactory$Builder;
    daemon(arg0: boolean): BasicThreadFactory$Builder;
    namingPattern(arg0: string): BasicThreadFactory$Builder;
    priority(arg0: number): BasicThreadFactory$Builder;
    reset(): void;
    uncaughtExceptionHandler(arg0: (param0: Thread, param1: Throwable) => void): BasicThreadFactory$Builder;
    wrappedFactory(arg0: ThreadFactory): BasicThreadFactory$Builder;
}