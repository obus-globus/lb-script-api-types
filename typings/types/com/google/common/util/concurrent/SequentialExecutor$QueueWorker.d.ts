import type { SequentialExecutor } from '../../../../../com/google/common/util/concurrent/SequentialExecutor.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SequentialExecutor$QueueWorker extends Object implements Runnable {
    constructor(null_: SequentialExecutor, arg1: () => void)
    // private task: () => void;
    run(): void;
    toString(): string;
    // private workOnQueue(): void;
}