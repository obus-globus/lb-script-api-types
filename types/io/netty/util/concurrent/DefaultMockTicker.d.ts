import type { MockTicker } from '../../../../io/netty/util/concurrent/MockTicker.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Condition } from '../../../../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultMockTicker extends Object implements MockTicker {
    constructor()
    // private lock: ReentrantLock;
    // private nanoTime: AtomicLong;
    // private sleeperCondition: Condition;
    // private sleepers: Thread[];
    // private tickCondition: Condition;
    advance(arg0: number, arg1: TimeUnit): void;
    advanceMillis(arg0: number): void;
    awaitSleepingThread(arg0: Thread): void;
    initialNanoTime(): number;
    nanoTime(): number;
    sleep(arg0: number, arg1: TimeUnit): void;
}