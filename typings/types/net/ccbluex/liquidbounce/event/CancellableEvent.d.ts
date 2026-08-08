import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * A cancellable event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:38}
 */
export abstract class CancellableEvent extends Event {
    constructor()
    // private isCancelled: boolean;
    /**
     * Let you know if the event is canceled
     *
     * @returns state of cancel
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:44}
     */
    /*not mapped: */ isCancelled(): boolean;
    /**
     * Allows you to cancel an event
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/event/Event.kt:50}
     */
    cancelEvent(): void;
}