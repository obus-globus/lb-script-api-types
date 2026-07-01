import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
/**
 * Fires after an item interaction completes, exposing the hand used and the interaction result.
 */
export class PlayerInteractedItemEvent extends Event {
    constructor(player: Player, hand: InteractionHand, actionResult: InteractionResult)
    readonly actionResult: InteractionResult;
    readonly hand: InteractionHand;
    readonly player: Player;
}