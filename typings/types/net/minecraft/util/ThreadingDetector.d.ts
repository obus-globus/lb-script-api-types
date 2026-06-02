import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Semaphore } from '../../../java/util/concurrent/Semaphore.d.ts'
import type { Lock } from '../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ReportedException } from '../../../net/minecraft/ReportedException.d.ts'
export class ThreadingDetector extends Object {
    static makeThreadingException(paramname: string, paramthreadThatFailedToAcquire: Thread): ReportedException;
    constructor(name: string)
    // private fullException: ReportedException;
    // private lock: Semaphore;
    // private name: string;
    // private stackTraceLock: Lock;
    // private threadThatFailedToAcquire: Thread;
    checkAndLock(): void;
    checkAndUnlock(): void;
}