import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { CountDownLatch } from '../../../../../java/util/concurrent/CountDownLatch.d.ts'
import type { ExecutorService } from '../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Semaphore } from '../../../../../java/util/concurrent/Semaphore.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Condition } from '../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Uninterruptibles extends Object {
    static awaitTerminationUninterruptibly(paramexecutor: ExecutorService, paramtimeout: Duration): boolean;
    static awaitTerminationUninterruptibly(paramexecutor: ExecutorService, paramtimeout: number, paramunit: TimeUnit): boolean;
    static awaitTerminationUninterruptibly(paramexecutor: ExecutorService): void;
    static awaitUninterruptibly(paramlatch: CountDownLatch, paramtimeout: Duration): boolean;
    static awaitUninterruptibly(paramlatch: CountDownLatch, paramtimeout: number, paramunit: TimeUnit): boolean;
    static awaitUninterruptibly(paramcondition: Condition, paramtimeout: Duration): boolean;
    static awaitUninterruptibly(paramcondition: Condition, paramtimeout: number, paramunit: TimeUnit): boolean;
    static awaitUninterruptibly(paramlatch: CountDownLatch): void;
    static getUninterruptibly(paramfuture: Future<Object>): Object | null;
    static getUninterruptibly(paramfuture: Future<Object>, paramtimeout: Duration): Object | null;
    static getUninterruptibly(paramfuture: Future<Object>, paramtimeout: number, paramunit: TimeUnit): Object | null;
    static joinUninterruptibly(paramtoJoin: Thread): void;
    static joinUninterruptibly(paramtoJoin: Thread, paramtimeout: Duration): void;
    static joinUninterruptibly(paramtoJoin: Thread, paramtimeout: number, paramunit: TimeUnit): void;
    static putUninterruptibly(paramqueue: (Object | null)[], paramelement: Object | null): void;
    static sleepUninterruptibly(paramsleepFor: Duration): void;
    static sleepUninterruptibly(paramsleepFor: number, paramunit: TimeUnit): void;
    static takeUninterruptibly(paramqueue: (Object | null)[]): Object | null;
    static tryAcquireUninterruptibly(paramsemaphore: Semaphore, parampermits: number, paramtimeout: Duration): boolean;
    static tryAcquireUninterruptibly(paramsemaphore: Semaphore, parampermits: number, paramtimeout: number, paramunit: TimeUnit): boolean;
    static tryAcquireUninterruptibly(paramsemaphore: Semaphore, paramtimeout: Duration): boolean;
    static tryAcquireUninterruptibly(paramsemaphore: Semaphore, paramtimeout: number, paramunit: TimeUnit): boolean;
    static tryLockUninterruptibly(paramlock: Lock, paramtimeout: Duration): boolean;
    static tryLockUninterruptibly(paramlock: Lock, paramtimeout: number, paramunit: TimeUnit): boolean;
    private constructor()
}