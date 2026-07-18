import type { SelectInterest } from '../../../../io/ktor/network/selector/SelectInterest.d.ts'
import type { Selectable } from '../../../../io/ktor/network/selector/Selectable.d.ts'
import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { SelectorManager$Companion } from '../../../../io/ktor/network/selector/SelectorManager$Companion.d.ts'
import type { SelectionKey } from '../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export abstract class SelectorManagerSupport extends Object implements SelectorManager {
    static Companion: SelectorManager$Companion;
    constructor()
    // private cancelled: number;
    // private /*not mapped: */ getCancelled(): number;
    /*not mapped: */ getCoroutineContext(): CoroutineContext;
    // private pending: number;
    // private /*not mapped: */ getPending(): number;
    readonly provider: SelectorProvider;
    protected applyInterest(selector: Selector, selectable: Selectable): void;
    protected cancelAllSuspensions(attachment: Selectable, cause: Throwable): void;
    protected cancelAllSuspensions(selector: Selector, cause: Throwable | null): void;
    close(): void;
    protected handleSelectedKey(key: SelectionKey): void;
    protected handleSelectedKeys(selectedKeys: SelectionKey[], keys: SelectionKey[]): void;
    notifyClosed(selectable: Selectable): void;
    protected notifyClosedImpl(selector: Selector, key: SelectionKey, attachment: Selectable): void;
    protected publishInterest(selectable: Selectable): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    select(selectable: Selectable, interest: SelectInterest, $completion: Continuation<void>): any;
}