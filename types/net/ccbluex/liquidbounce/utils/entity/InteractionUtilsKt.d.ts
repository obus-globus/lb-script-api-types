import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { SwingMode } from '../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { StrictInteractionResult } from '../../../../../net/ccbluex/liquidbounce/utils/entity/StrictInteractionResult.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { EntityHitResult } from '../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
export class InteractionUtilsKt extends Object {
    /**
     * Simulated {@link net.minecraft.world.phys.HitResult.Type.BLOCK} branch in vanilla
     * No fallback {@link MultiPlayerGameMode.useItem} call
     *
     * @returns {@link MultiPlayerGameMode.useItemOn} result
     * @see net.minecraft.client.Minecraft.startUseItem
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt#L189 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt:189}
     */
    static interactBlock(paramarg0: BlockHitResult, paramarg1: InteractionHand, paramarg2: SwingMode): InteractionResult;
    /**
     * @returns {@link MultiPlayerGameMode.useItemOn} or {@link MultiPlayerGameMode.useItem} result
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt#L216 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt:216}
     */
    static interactBlockLikeVanilla(paramarg0: BlockHitResult, paramarg1: SwingMode, paramarg2: Rotation): StrictInteractionResult;
    /**
     * Simulated {@link net.minecraft.world.phys.HitResult.Type.ENTITY} branch in vanilla
     * No fallback {@link MultiPlayerGameMode.useItem} call
     *
     * @returns Cannot interact -> null; else -> {@link MultiPlayerGameMode.interact} result
     * @see net.minecraft.client.Minecraft.startUseItem
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt#L117 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt:117}
     */
    static interactEntity(paramarg0: Entity, paramarg1: EntityHitResult, paramarg2: InteractionHand, paramarg3: SwingMode): InteractionResult;
    /**
     * @returns Cannot interact -> null; else -> {@link MultiPlayerGameMode.interact} or {@link MultiPlayerGameMode.useItem} result
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt#L147 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/InteractionUtils.kt:147}
     */
    static interactEntityLikeVanilla(paramarg0: Entity, paramarg1: EntityHitResult, paramarg2: SwingMode, paramarg3: Rotation): StrictInteractionResult;
    static shouldSwingHand(paramarg0: InteractionResult): boolean;
    static useItem(paramarg0: InteractionHand): InteractionResult;
    static useItem(paramarg0: InteractionHand, paramarg1: number): InteractionResult;
    static useItem(paramarg0: InteractionHand, paramarg1: number, paramarg2: number): InteractionResult;
    static useItem(paramarg0: InteractionHand, paramarg1: number, paramarg2: number, paramarg3: SwingMode): InteractionResult;
    static useItemStrict(paramarg0: number, paramarg1: number, paramarg2: SwingMode): StrictInteractionResult;
}