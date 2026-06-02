import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
export class SynchronousMutex extends Object {
    constructor()
    // private reentrantLock: ReentrantLock;
    lock(): void;
    tryLock(): boolean;
    tryLock(timeout: Duration): boolean;
    unlock(): void;
}