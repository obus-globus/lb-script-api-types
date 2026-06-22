import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ThreadAwareExecutor extends Executor, Object {
    execute(arg0: () => void): void;
    isExecutorThread(arg0: Thread): boolean;
}