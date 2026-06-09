import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface EventLoopTaskQueueFactory extends Object {
    newTaskQueue(arg0: number): () => void[];
}