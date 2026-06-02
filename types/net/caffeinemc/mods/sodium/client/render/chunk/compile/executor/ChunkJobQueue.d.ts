import type { Semaphore } from '../../../../../../../../../java/util/concurrent/Semaphore.d.ts'
import type { AtomicBoolean } from '../../../../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicLong } from '../../../../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkJob } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJob.d.ts'
export class ChunkJobQueue extends Object {
    constructor()
    // private isRunning: AtomicBoolean;
    readonly jobDurationSum: AtomicLong;
    // private jobs: ChunkJob[];
    // private semaphore: Semaphore;
    add(arg0: ChunkJob, arg1: boolean): void;
    getJobDurationSum(): number;
    // private getNextTask(): ChunkJob;
    isEmpty(): boolean;
    isRunning(): boolean;
    shutdown(): E[];
    size(): number;
    stealJob(arg0: ChunkJob): boolean;
    waitForNextJob(): ChunkJob;
}