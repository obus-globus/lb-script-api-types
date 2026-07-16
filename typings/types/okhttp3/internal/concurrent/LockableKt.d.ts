import type { Object } from '../../../java/lang/Object.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
export class LockableKt extends Object {
    static assertLockHeld(self: Lockable): void;
    static assertLockNotHeld(self: Lockable): void;
    static awaitNanos(self: Lockable, nanos: number): void;
    static notify(self: Lockable): void;
    static notifyAll(self: Lockable): void;
    static wait(self: Lockable): void;
    static withLock<T extends unknown>(self: Lockable, action: () => T): T;
}