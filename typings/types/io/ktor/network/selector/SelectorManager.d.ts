import type { SelectInterest } from '../../../../io/ktor/network/selector/SelectInterest.d.ts'
import type { Selectable } from '../../../../io/ktor/network/selector/Selectable.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export interface SelectorManager extends Closeable, Object, CoroutineScope{
    readonly provider: SelectorProvider;
    close(): void;
    notifyClosed(selectable: Selectable): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    select(selectable: Selectable, interest: SelectInterest, $completion: Continuation<void>): any;
}