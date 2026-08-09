import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityHitResult } from '../../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
/**
 * Helpers for attacking, interacting with and using items on entities and blocks (the `InteractionUtil` global).
 */
export class ScriptInteractionUtil extends Object {
    static INSTANCE: ScriptInteractionUtil;
    attackEntity(entity: Entity, swing: boolean, keepSprint: boolean): void;
    /**
     * Interacts with the given entity at the hit result using the given hand (no-op if it is the local player).
     *
     * @param entity the entity to interact with
     * @param hitResult the entity hit result
     * @param hand the hand to interact with
     */
    interactEntity(entity: Entity, hitResult: EntityHitResult, hand: InteractionHand): void;
    /**
     * Places a block at the given {@link blockPos} using the given {@link hand}.
     *
     * @returns true if the block was placed, false otherwise
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptInteractionUtil.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptInteractionUtil.kt:72}
     */
    placeBlock(blockPos: BlockPos, hand: InteractionHand): boolean;
    /**
     * Uses (activates) the item held in the given hand.
     *
     * @param hand the hand whose item to use
     */
    useItem(hand: InteractionHand): void;
}