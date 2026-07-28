import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
/**
 * Warning: UseHotbarSlotOrOffHand won't stimulate this event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/event/events/PlayerEvents.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/PlayerEvents.kt:81}
 */
export class PlayerInteractItemEvent extends CancellableEvent {
    constructor(player: Player, hand: InteractionHand)
    readonly hand: InteractionHand;
    readonly player: Player;
}