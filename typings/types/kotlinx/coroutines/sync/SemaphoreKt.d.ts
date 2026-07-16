import type { Object } from '../../../java/lang/Object.d.ts'
import type { Semaphore } from '../../../kotlinx/coroutines/sync/Semaphore.d.ts'
export class SemaphoreKt extends Object {
    static Semaphore(permits: number, acquiredPermits: number): Semaphore;
    static withPermit<T extends unknown>(self: Semaphore, action: () => T): T;
}