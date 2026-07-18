import type { Timeout } from '../../../../io/ktor/network/util/Timeout.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class UtilsKt extends Object {
    static INFINITE_TIMEOUT_MS: number;
    static createTimeout(self: CoroutineScope, name: string, timeoutMs: number, clock: () => number, onTimeout: () => void): Timeout;
    static withTimeout<T extends unknown>(self: Timeout | null, block: () => T): T;
}