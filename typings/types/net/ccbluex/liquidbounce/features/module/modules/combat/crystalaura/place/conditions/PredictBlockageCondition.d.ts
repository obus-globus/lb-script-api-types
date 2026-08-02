import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { CandidateCache } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/CandidateCache.d.ts'
import type { PlacementCondition } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementCondition.d.ts'
import type { PlacementContext } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementContext.d.ts'
import type { BlockPos } from '../../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Uses the prediction to check if the future crystal will be blocked by players in the next ticks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/conditions/PredictBlockageCondition.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/conditions/PredictBlockageCondition.kt:31}
 */
export class PredictBlockageCondition extends Object implements PlacementCondition {
    static INSTANCE: PredictBlockageCondition;
    isValid(context: PlacementContext, cache: CandidateCache, candidate: BlockPos): boolean;
}