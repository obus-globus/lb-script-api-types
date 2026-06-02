import type { Semaphore } from '../../../kotlinx/coroutines/sync/Semaphore.d.ts'
import type { SemaphoreAndMutexImpl } from '../../../kotlinx/coroutines/sync/SemaphoreAndMutexImpl.d.ts'
export class SemaphoreImpl extends SemaphoreAndMutexImpl implements Semaphore {
    constructor(permits: number, acquiredPermits: number)
}