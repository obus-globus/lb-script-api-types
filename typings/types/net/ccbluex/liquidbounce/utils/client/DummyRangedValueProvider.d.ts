import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { RangedValueProvider } from '../../../../../net/ccbluex/liquidbounce/utils/client/RangedValueProvider.d.ts'
/**
 * Just returns the {@link value}; expects the value to be already registered elsewhere.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:42}
 */
export class DummyRangedValueProvider extends Object implements RangedValueProvider {
    constructor(value: RangedValue<Object>)
    // private value: RangedValue<Object>;
    register(offeredValueGroup: ValueGroup): RangedValue<Object>;
}