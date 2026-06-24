import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Auto Swap will automatically swap your selected slot to the best item for the situation.
 * For example, if you're low on health, it will swap to the next health pot.
 *
 * It also allows to customize the delay between each swap.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt:61}
 */
export class ModuleAutoBuff$AutoSwap extends ToggleableValueGroup {
    static INSTANCE: ModuleAutoBuff$AutoSwap;
    /**
     * How long should we wait after swapping to the item?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt:69}
     */
    readonly delayIn: { start: number; endInclusive: number; step: number };
    /**
     * How long should we wait after using the item?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt:74}
     */
    readonly delayOut: { start: number; endInclusive: number; step: number };
}