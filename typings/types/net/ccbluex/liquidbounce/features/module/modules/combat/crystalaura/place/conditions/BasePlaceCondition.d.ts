import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { CandidateCache } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/CandidateCache.d.ts'
import type { PlacementCondition } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementCondition.d.ts'
import type { PlacementContext } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementContext.d.ts'
import type { BlockPos } from '../../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Positions are only considered if they're obsidian or bedrock because that are the only blocks you can place
 * crystals on.
 *
 * If this is not the case, but we can use {@link SubmoduleBasePlace} to place obsidian or bedrock,
 * the position is also considered.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/conditions/BasePlaceCondition.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/conditions/BasePlaceCondition.kt:34}
 */
export class BasePlaceCondition extends Object implements PlacementCondition {
    static INSTANCE: BasePlaceCondition;
    isValid(context: PlacementContext, cache: CandidateCache, candidate: BlockPos): boolean;
}