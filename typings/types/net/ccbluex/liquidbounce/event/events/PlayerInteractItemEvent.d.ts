import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
/**
 * Warning: UseHotbarSlotOrOffHand won't stimulate this event
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/event/events/PlayerEvents.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/PlayerEvents.kt:81}
 */
export class PlayerInteractItemEvent extends CancellableEvent {
    constructor(player: Player, hand: InteractionHand)
    readonly hand: InteractionHand;
    readonly player: Player;
}