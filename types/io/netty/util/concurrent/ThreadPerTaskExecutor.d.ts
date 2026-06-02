import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ThreadPerTaskExecutor extends Object implements Executor {
    constructor(arg0: ThreadFactory)
    // private threadFactory: ThreadFactory;
    execute(arg0: () => void): void;
}