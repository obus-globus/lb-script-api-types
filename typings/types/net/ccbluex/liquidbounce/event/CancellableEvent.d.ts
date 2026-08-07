import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * A cancellable event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:38}
 */
export abstract class CancellableEvent extends Event {
    constructor()
    // private isCancelled: boolean;
    /**
     * Let you know if the event is canceled
     *
     * @returns state of cancel
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:44}
     */
    /*not mapped: */ isCancelled(): boolean;
    /**
     * Allows you to cancel an event
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:50}
     */
    cancelEvent(): void;
}