import type { Monitor$Guard } from '../../../../../com/google/common/util/concurrent/Monitor$Guard.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Monitor extends Object {
    constructor()
    constructor(fair: boolean)
    // private activeGuards: Monitor$Guard;
    readonly fair: boolean;
    // private lock: ReentrantLock;
    // private await(guard: Monitor$Guard, signalBeforeWaiting: boolean): void;
    // private awaitNanos(guard: Monitor$Guard, nanos: number, signalBeforeWaiting: boolean): boolean;
    // private awaitUninterruptibly(guard: Monitor$Guard, signalBeforeWaiting: boolean): void;
    // private beginWaitingFor(guard: Monitor$Guard): void;
    // private endWaitingFor(guard: Monitor$Guard): void;
    enter(): void;
    enter(time: Duration): boolean;
    enter(time: number, unit: TimeUnit): boolean;
    enterIf(guard: Monitor$Guard): boolean;
    enterIf(guard: Monitor$Guard, time: Duration): boolean;
    enterIf(guard: Monitor$Guard, time: number, unit: TimeUnit): boolean;
    enterIfInterruptibly(guard: Monitor$Guard): boolean;
    enterIfInterruptibly(guard: Monitor$Guard, time: Duration): boolean;
    enterIfInterruptibly(guard: Monitor$Guard, time: number, unit: TimeUnit): boolean;
    enterInterruptibly(): void;
    enterInterruptibly(time: Duration): boolean;
    enterInterruptibly(time: number, unit: TimeUnit): boolean;
    enterWhen(guard: Monitor$Guard): void;
    enterWhen(guard: Monitor$Guard, time: Duration): boolean;
    enterWhen(guard: Monitor$Guard, time: number, unit: TimeUnit): boolean;
    enterWhenUninterruptibly(guard: Monitor$Guard): void;
    enterWhenUninterruptibly(guard: Monitor$Guard, time: Duration): boolean;
    enterWhenUninterruptibly(guard: Monitor$Guard, time: number, unit: TimeUnit): boolean;
    getOccupiedDepth(): number;
    getQueueLength(): number;
    getWaitQueueLength(guard: Monitor$Guard): number;
    hasQueuedThread(thread: Thread): boolean;
    hasQueuedThreads(): boolean;
    hasWaiters(guard: Monitor$Guard): boolean;
    isFair(): boolean;
    isOccupied(): boolean;
    isOccupiedByCurrentThread(): boolean;
    // private isSatisfied(guard: Monitor$Guard): boolean;
    leave(): void;
    newGuard(isSatisfied: () => boolean): Monitor$Guard;
    // private signalAllWaiters(): void;
    // private signalNextWaiter(): void;
    tryEnter(): boolean;
    tryEnterIf(guard: Monitor$Guard): boolean;
    waitFor(guard: Monitor$Guard): void;
    waitFor(guard: Monitor$Guard, time: Duration): boolean;
    waitFor(guard: Monitor$Guard, time: number, unit: TimeUnit): boolean;
    waitForUninterruptibly(guard: Monitor$Guard): void;
    waitForUninterruptibly(guard: Monitor$Guard, time: Duration): boolean;
    waitForUninterruptibly(guard: Monitor$Guard, time: number, unit: TimeUnit): boolean;
}