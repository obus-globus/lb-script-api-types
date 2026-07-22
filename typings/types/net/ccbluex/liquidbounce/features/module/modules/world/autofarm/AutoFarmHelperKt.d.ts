import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { HarvestAction } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autofarm/HarvestAction.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class AutoFarmHelperKt extends Object {
    /**
     * @see BonemealableBlock
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt:48}
     */
    static canUseBoneMeal(self: BlockPos, state: BlockState): boolean;
    /**
     * Get the harvest action for the block. The block itself might be not ready for harvest!
     * Call {@link BlockPos.readyForHarvest} before performing the harvest action.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt:71}
     */
    static getHarvestAction(paramarg0: Block): HarvestAction;
    static getSupportsCocoa(paramarg0: BlockState): boolean;
    static getSupportsCrops(paramarg0: BlockState): boolean;
    static getSupportsNetherWart(paramarg0: BlockState): boolean;
    /**
     * Check if [this@shouldBeDestroyed] with {@link state} is ready for harvest
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt:82}
     */
    static readyForHarvest(self: BlockPos, state: BlockState): boolean;
}