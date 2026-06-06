import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { CandidateCache } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/CandidateCache.d.ts'
import type { PlacementCondition } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementCondition.d.ts'
import type { PlacementContext } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementContext.d.ts'
import type { BlockPos } from '../../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Depending on the settings, we only take upper block sides but is the checked side in range (and visible)?
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/conditions/OnlyAboveCondition.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/conditions/OnlyAboveCondition.kt:28}
 */
export class OnlyAboveCondition extends Object implements PlacementCondition {
    static INSTANCE: OnlyAboveCondition;
    isValid(context: PlacementContext, cache: CandidateCache, candidate: BlockPos): boolean;
}