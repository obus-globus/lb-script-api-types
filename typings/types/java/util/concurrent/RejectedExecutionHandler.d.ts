import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ThreadPoolExecutor } from '../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RejectedExecutionHandler extends Object {
    rejectedExecution(arg0: () => void, arg1: ThreadPoolExecutor): void;
}