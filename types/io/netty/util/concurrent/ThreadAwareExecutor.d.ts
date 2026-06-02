import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ThreadAwareExecutor extends Executor, Object{
    isExecutorThread(arg0: Thread): boolean;
}