import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ThreadFactory } from '../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileAlterationObserver } from '../../../../../org/apache/commons/io/monitor/FileAlterationObserver.d.ts'
export class FileAlterationMonitor extends Object implements Runnable {
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: FileAlterationObserver[])
    constructor(arg0: number, arg1: FileAlterationObserver[])
    // private intervalMillis: number;
    readonly observers: FileAlterationObserver[];
    // private running: boolean;
    // private thread: Thread;
    readonly threadFactory: ThreadFactory;
    addObserver(arg0: FileAlterationObserver): void;
    getInterval(): number;
    getObservers(): FileAlterationObserver[];
    removeObserver(arg0: FileAlterationObserver): void;
    run(): void;
    setThreadFactory(arg0: ThreadFactory): void;
    start(): void;
    stop(): void;
    stop(arg0: number): void;
}