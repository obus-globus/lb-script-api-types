import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
import type { SuspendHandlerBehavior$DiscardLatest$Companion } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior$DiscardLatest$Companion.d.ts'
/**
 * Discards the new event if a job is active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:121}
 */
export class SuspendHandlerBehavior$DiscardLatest extends Record implements SuspendHandlerBehavior {
    static Companion: SuspendHandlerBehavior$DiscardLatest$Companion;
    static Default: SuspendHandlerBehavior$DiscardLatest;
    constructor(onCancellation?: (() => void) | null)
    // private onCancellation: (() => void) | null;
    /*not mapped: */ onCancellation(): (() => void) | null;
    component1(): (() => void) | null;
    copy(onCancellation: (() => void) | null): SuspendHandlerBehavior$DiscardLatest;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}