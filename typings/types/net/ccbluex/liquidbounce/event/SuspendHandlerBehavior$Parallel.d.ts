import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineStart } from '../../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
import type { SuspendHandlerBehavior$Parallel$Companion } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior$Parallel$Companion.d.ts'
/**
 * Starts a new job for each event.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:46}
 */
export class SuspendHandlerBehavior$Parallel extends Record implements SuspendHandlerBehavior {
    static Companion: SuspendHandlerBehavior$Parallel$Companion;
    static Default: SuspendHandlerBehavior$Parallel;
    constructor(start: CoroutineStart, onCancellation: (() => void) | null)
    // private onCancellation: (() => void) | null;
    /*not mapped: */ onCancellation(): (() => void) | null;
    // private start: CoroutineStart;
    /*not mapped: */ start(): CoroutineStart;
    component1(): CoroutineStart;
    component2(): (() => void) | null;
    copy(start: CoroutineStart, onCancellation: (() => void) | null): SuspendHandlerBehavior$Parallel;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}