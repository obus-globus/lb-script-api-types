import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Semaphore$Sync } from '../../../java/util/concurrent/Semaphore$Sync.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Semaphore extends Object implements Serializable {
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private sync: Semaphore$Sync;
    acquire(): void;
    acquire(arg0: number): void;
    acquireUninterruptibly(): void;
    acquireUninterruptibly(arg0: number): void;
    availablePermits(): number;
    drainPermits(): number;
    getQueueLength(): number;
    getQueuedThreads(): E[];
    hasQueuedThreads(): boolean;
    isFair(): boolean;
    reducePermits(arg0: number): void;
    release(): void;
    release(arg0: number): void;
    toString(): string;
    tryAcquire(): boolean;
    tryAcquire(arg0: number): boolean;
    tryAcquire(arg0: number, arg1: number, arg2: TimeUnit): boolean;
    tryAcquire(arg0: number, arg1: TimeUnit): boolean;
}