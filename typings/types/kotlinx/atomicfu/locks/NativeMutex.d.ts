import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { AtomicInt } from '../../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { NativeMutex$ParkingQueue } from '../../../kotlinx/atomicfu/locks/NativeMutex$ParkingQueue.d.ts'
export class NativeMutex extends Object {
    constructor(park: (param0: Duration) => void, unpark: (param0: Thread) => void)
    // private holdCount: AtomicInt;
    // private owningThread: AtomicRef<Thread>;
    readonly park: (param0: Duration) => void;
    // private parkingQueue: NativeMutex$ParkingQueue;
    // private state: AtomicInt;
    readonly unpark: (param0: Thread) => void;
    getQueueSize(): number;
    lock(): void;
    tryLock(): boolean;
    tryLock(duration: Duration): boolean;
    unlock(): void;
}