import type { Object } from '../../../java/lang/Object.d.ts'
import type { SynchronousMutex } from '../../../kotlinx/atomicfu/locks/SynchronousMutex.d.ts'
export class SynchronousMutexKt extends Object {
    static withLock<T extends unknown>(self: SynchronousMutex, block: () => T): T;
}