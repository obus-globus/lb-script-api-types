import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SynchronizedKt extends Object {
    static reentrantLock(): ReentrantLock;
    static synchronized<T extends unknown>(lock: Object, block: () => T): T;
    static withLock<T extends unknown>(self: ReentrantLock, block: () => T): T;
}