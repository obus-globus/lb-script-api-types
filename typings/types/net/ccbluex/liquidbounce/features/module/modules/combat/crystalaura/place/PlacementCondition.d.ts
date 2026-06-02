import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CandidateCache } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/CandidateCache.d.ts'
import type { PlacementContext } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementContext.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export interface PlacementCondition extends Object{
    isValid(context: PlacementContext, cache: CandidateCache, candidate: BlockPos): boolean;
}