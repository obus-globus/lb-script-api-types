import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Fluid } from '../../../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class BucketUtilsKt extends Object {
    /**
     * Matches the non-container branch of Minecraft 26.2 BucketItem.emptyContents().
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/BucketUtils.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/BucketUtils.kt:27}
     */
    static canPlaceStandaloneFluid(self: BlockState, fluid: Fluid): boolean;
    /**
     * Water buckets need sneak to skip LiquidBlockContainer.useItemOn and place adjacent water.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/BucketUtils.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/liquid/BucketUtils.kt:32}
     */
    static requiresSneakForAdjacentFluidPlacement(self: BlockState, fluid: Fluid): boolean;
}