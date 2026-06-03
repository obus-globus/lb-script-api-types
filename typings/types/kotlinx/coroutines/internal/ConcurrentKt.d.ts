import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentKt extends Object {
    static identitySet(paramarg0: number): (Object | null)[];
    static removeFutureOnCancel(paramarg0: Executor): boolean;
    static withLock(paramarg0: ReentrantLock, paramarg1: () => Object | null): Object | null;
}