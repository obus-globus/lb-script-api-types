import type { ActorSelectorManager$ContinuationHolder } from '../../../../io/ktor/network/selector/ActorSelectorManager$ContinuationHolder.d.ts'
import type { LockFreeMPSCQueue } from '../../../../io/ktor/network/selector/LockFreeMPSCQueue.d.ts'
import type { SelectInterest } from '../../../../io/ktor/network/selector/SelectInterest.d.ts'
import type { Selectable } from '../../../../io/ktor/network/selector/Selectable.d.ts'
import type { SelectorManager$Companion } from '../../../../io/ktor/network/selector/SelectorManager$Companion.d.ts'
import type { SelectorManagerSupport } from '../../../../io/ktor/network/selector/SelectorManagerSupport.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Selector } from '../../../../java/nio/channels/Selector.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class ActorSelectorManager extends SelectorManagerSupport implements Closeable, CoroutineScope {
    static Companion: SelectorManager$Companion;
    constructor(context: CoroutineContext)
    // private closed: boolean;
    // private continuation: ActorSelectorManager$ContinuationHolder<void, Continuation<void>>;
    readonly coroutineContext: CoroutineContext;
    // private inSelect: boolean;
    // private selectionQueue: LockFreeMPSCQueue<Selectable>;
    // private selectorRef: Selector | null;
    // private wakeup: AtomicLong;
    close(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private dispatchIfNeeded($completion: Continuation<void>): any;
    notifyClosed(selectable: Selectable): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private process(mb: LockFreeMPSCQueue<Selectable>, selector: Selector, $completion: Continuation<void>): any;
    // private processInterests(mb: LockFreeMPSCQueue<Selectable>, selector: Selector): void;
    protected publishInterest(selectable: Selectable): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    select(selectable: Selectable, interest: SelectInterest, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private select(selector: Selector, $completion: Continuation<number>): any;
    // private selectWakeup(): void;
}