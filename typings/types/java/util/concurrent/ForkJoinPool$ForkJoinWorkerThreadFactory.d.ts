import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinWorkerThread } from '../../../java/util/concurrent/ForkJoinWorkerThread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ForkJoinPool$ForkJoinWorkerThreadFactory extends Object{
    newThread(arg0: ForkJoinPool): ForkJoinWorkerThread;
}