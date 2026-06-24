import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityHitResult } from '../../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
export class ScriptInteractionUtil extends Object {
    static INSTANCE: ScriptInteractionUtil;
    attackEntity(entity: Entity, swing: boolean, keepSprint: boolean): void;
    interactEntity(entity: Entity, hitResult: EntityHitResult, hand: InteractionHand): void;
    /**
     * Places a block at the given {@link blockPos} using the given {@link hand}.
     *
     * @returns true if the block was placed, false otherwise
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptInteractionUtil.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptInteractionUtil.kt:67}
     */
    placeBlock(blockPos: BlockPos, hand: InteractionHand): boolean;
    useItem(hand: InteractionHand): void;
}