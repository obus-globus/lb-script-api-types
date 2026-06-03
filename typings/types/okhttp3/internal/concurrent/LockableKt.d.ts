import type { Object } from '../../../java/lang/Object.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
export class LockableKt extends Object {
    static assertLockHeld(paramarg0: Lockable): void;
    static assertLockNotHeld(paramarg0: Lockable): void;
    static awaitNanos(paramarg0: Lockable, paramarg1: number): void;
    static notify(paramarg0: Lockable): void;
    static notifyAll(paramarg0: Lockable): void;
    static wait(paramarg0: Lockable): void;
    static withLock(paramarg0: Lockable, paramarg1: () => Object | null): Object | null;
}