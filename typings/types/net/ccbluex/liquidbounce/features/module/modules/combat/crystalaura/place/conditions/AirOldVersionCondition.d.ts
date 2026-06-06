import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { CandidateCache } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/CandidateCache.d.ts'
import type { PlacementCondition } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementCondition.d.ts'
import type { PlacementContext } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/PlacementContext.d.ts'
import type { BlockPos } from '../../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * In 1.12.2 crystals need two blocks air above to be placed.
 *
 * [MCP940 net.minecraft.item.ItemEndCrystal](https://github.com/WangTingZheng/mcp940/blob/d0c030a4139ce7cf3f284b180f0d9ea87bdf8141/src/minecraft/net/minecraft/item/ItemEndCrystal.java#L30)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/conditions/AirAboveCondition.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/place/conditions/AirAboveCondition.kt:46}
 */
export class AirOldVersionCondition extends Object implements PlacementCondition {
    static INSTANCE: AirOldVersionCondition;
    isValid(context: PlacementContext, cache: CandidateCache, candidate: BlockPos): boolean;
}