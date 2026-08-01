import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
/**
 * Provides a ranged value to a submodule.
 * This has the advantage that the value can be either registered in the module or in the submodule.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:28}
 */
export interface RangedValueProvider extends Object{
    /**
     * Offers the provider to register to the configurable.
     *
     * @returns The ranged value.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:35}
     */
    register(offeredValueGroup: ValueGroup): RangedValue<Object> | null;
}