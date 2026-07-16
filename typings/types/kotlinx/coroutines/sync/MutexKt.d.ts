import type { Object } from '../../../java/lang/Object.d.ts'
import type { Mutex } from '../../../kotlinx/coroutines/sync/Mutex.d.ts'
export class MutexKt extends Object {
    static Mutex(locked: boolean): Mutex;
    static withLock<T extends unknown>(self: Mutex, owner: Object | null, action: () => T): T;
}