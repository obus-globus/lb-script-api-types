import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SuspendHandlerBehavior } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.d.ts'
import type { SuspendHandlerBehavior$DiscardLatest$Companion } from '../../../../net/ccbluex/liquidbounce/event/SuspendHandlerBehavior$DiscardLatest$Companion.d.ts'
/**
 * Discards the new event if a job is active.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt#L121 | src/main/kotlin/net/ccbluex/liquidbounce/event/SuspendHandlerBehavior.kt:121}
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