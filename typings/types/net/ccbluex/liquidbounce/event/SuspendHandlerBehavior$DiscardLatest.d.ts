import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
import type { SuspendHandlerBehavior$DiscardLatest$Companion } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior$DiscardLatest$Companion.d.ts'
/**
 * Discards the new event if a job is active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:121}
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