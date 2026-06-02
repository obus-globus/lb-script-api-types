import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { ThreadGroup } from '../../../../../../java/lang/ThreadGroup.d.ts'
import type { ThreadFactory } from '../../../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Log4jThreadFactory extends Object implements ThreadFactory {
    static createDaemonThreadFactory(paramthreadFactoryName: string): Log4jThreadFactory;
    static createThreadFactory(paramthreadFactoryName: string): Log4jThreadFactory;
    constructor(threadFactoryName: string, daemon: boolean, priority: number)
    // private daemon: boolean;
    // private group: ThreadGroup;
    // private priority: number;
    // private threadNamePrefix: string;
    newThread(runnable: () => void): Thread;
}