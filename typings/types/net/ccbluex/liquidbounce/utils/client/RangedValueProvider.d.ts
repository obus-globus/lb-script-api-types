import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
/**
 * Provides a ranged value to a submodule.
 * This has the advantage that the value can be either registered in the module or in the submodule.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:28}
 */
export interface RangedValueProvider extends Object{
    /**
     * Offers the provider to register to the configurable.
     *
     * @returns The ranged value.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:35}
     */
    register(offeredValueGroup: ValueGroup): RangedValue<Object> | null;
}