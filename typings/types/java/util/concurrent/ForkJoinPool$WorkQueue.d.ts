import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinPool$ManagedBlocker } from '../../../java/util/concurrent/ForkJoinPool$ManagedBlocker.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { ForkJoinWorkerThread } from '../../../java/util/concurrent/ForkJoinWorkerThread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ForkJoinPool$WorkQueue extends Object {
    constructor(arg0: ForkJoinWorkerThread, arg1: number, arg2: number, arg3: boolean)
    // private array: ForkJoinTask<Object>[];
    // private base: number;
    // private config: number;
    // private nsteals: number;
    // private owner: ForkJoinWorkerThread;
    // private parking: number;
    // private phase: number;
    // private source: number;
    // private stackPred: number;
    // private top: number;
    cancelTasks(): void;
    getPoolIndex(): number;
    // private growArray(arg0: ForkJoinTask<Object>[], arg1: number, arg2: number): void;
    helpAsyncBlocker(arg0: ForkJoinPool$ManagedBlocker): void;
    helpComplete(arg0: ForkJoinTask<Object>, arg1: boolean, arg2: number): number;
    isApparentlyUnblocked(): boolean;
    nextLocalTask(): ForkJoinTask<Object>;
    // private nextLocalTask(arg0: number): ForkJoinTask<Object>;
    peek(): ForkJoinTask<Object>;
    poll(): ForkJoinTask<Object>;
    push(arg0: ForkJoinTask<Object>, arg1: ForkJoinPool, arg2: boolean): void;
    queueSize(): number;
    topLevelExec(arg0: ForkJoinTask<Object>, arg1: number): void;
    tryLockPhase(): boolean;
    tryRemoveAndExec(arg0: ForkJoinTask<Object>, arg1: boolean): void;
    tryUnpush(arg0: ForkJoinTask<Object>, arg1: boolean): boolean;
    unlockPhase(): void;
    updateArray(arg0: ForkJoinTask<Object>[]): void;
    updateBase(arg0: number): void;
    updateTop(arg0: number): void;
}