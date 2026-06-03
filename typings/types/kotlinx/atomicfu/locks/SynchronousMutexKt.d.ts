import type { Object } from '../../../java/lang/Object.d.ts'
import type { SynchronousMutex } from '../../../kotlinx/atomicfu/locks/SynchronousMutex.d.ts'
export class SynchronousMutexKt extends Object {
    static withLock(paramarg0: SynchronousMutex, paramarg1: () => Object | null): Object | null;
}