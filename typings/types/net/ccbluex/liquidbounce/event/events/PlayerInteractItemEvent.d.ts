import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
/**
 * Warning: UseHotbarSlotOrOffHand won't stimulate this event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/event/events/PlayerEvents.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/PlayerEvents.kt:81}
 */
export class PlayerInteractItemEvent extends CancellableEvent {
    constructor(player: Player, hand: InteractionHand)
    readonly hand: InteractionHand;
    readonly player: Player;
}