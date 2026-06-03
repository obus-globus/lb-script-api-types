import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { HarvestAction } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autofarm/HarvestAction.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class AutoFarmHelperKt extends Object {
    /**
     * @see BonemealableBlock
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt:45}
     */
    static canUseBoneMeal(blockPos: BlockPos, state: BlockState): boolean;
    /**
     * Get the harvest action for the block. The block itself might be not ready for harvest!
     * Call {@link BlockPos.readyForHarvest} before performing the harvest action.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt:67}
     */
    static getHarvestAction(paramarg0: Block): HarvestAction;
    static getSupportsCocoa(paramarg0: BlockState): boolean;
    static getSupportsCrops(paramarg0: BlockState): boolean;
    static getSupportsNetherWart(paramarg0: BlockState): boolean;
    /**
     * Check if [this@shouldBeDestroyed] with {@link state} is ready for harvest
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt:79}
     */
    static readyForHarvest(blockPos: BlockPos, state: BlockState): boolean;
}