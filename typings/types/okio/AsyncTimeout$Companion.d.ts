import type { Condition } from '../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { AsyncTimeout } from '../okio/AsyncTimeout.d.ts'
import type { PriorityQueue } from '../okio/PriorityQueue.d.ts'
export class AsyncTimeout$Companion extends Object {
    // private IDLE_TIMEOUT_MILLIS: number;
    // private IDLE_TIMEOUT_NANOS: number;
    // private STATE_CANCELED: number;
    // private STATE_IDLE: number;
    // private STATE_IN_QUEUE: number;
    // private STATE_TIMED_OUT: number;
    // private TIMEOUT_WRITE_SIZE: number;
    readonly condition: Condition;
    idleSentinel: AsyncTimeout | null;
    readonly lock: ReentrantLock;
    readonly queue: PriorityQueue;
    awaitTimeout(): AsyncTimeout | null;
    // private insertIntoQueue(node: AsyncTimeout): void;
}