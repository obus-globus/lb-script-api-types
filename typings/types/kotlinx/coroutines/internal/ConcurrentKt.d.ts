import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentKt extends Object {
    static identitySet<E extends unknown>(expectedSize: number): E[];
    static removeFutureOnCancel(executor: Executor): boolean;
    static withLock<T extends unknown>(self: ReentrantLock, action: () => T): T;
}