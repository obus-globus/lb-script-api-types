import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
/**
 * Provides a ranged value to a submodule.
 * This has the advantage that the value can be either registered in the module or in the submodule.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:24}
 */
export interface RangedValueProvider extends Object{
    /**
     * Offers the provider to register to the configurable.
     *
     * @returns The ranged value.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:30}
     */
    register(offeredValueGroup: ValueGroup): RangedValue<Object> | null;
}