import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { RangedValueProvider } from '../../../../../net/ccbluex/liquidbounce/utils/client/RangedValueProvider.d.ts'
/**
 * {@link ValueGroup.float} registered to the submodule directly.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:60}
 */
export class FloatValueProvider extends Object implements RangedValueProvider {
    constructor(name: string, default_: number, range: ClosedFloatingPointRange<number>, suffix: string)
    readonly default: number;
    readonly name: string;
    readonly range: ClosedFloatingPointRange<number>;
    readonly suffix: string;
    register(offeredValueGroup: ValueGroup): RangedValue<Object>;
}