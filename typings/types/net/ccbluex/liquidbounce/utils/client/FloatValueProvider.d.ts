import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { RangedValueProvider } from '../../../../../net/ccbluex/liquidbounce/utils/client/RangedValueProvider.d.ts'
/**
 * {@link ValueGroup.float} registered to the submodule directly.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:60}
 */
export class FloatValueProvider extends Object implements RangedValueProvider {
    constructor(name: string, default_: number, range: ClosedFloatingPointRange<number>, suffix: string)
    readonly default: number;
    readonly name: string;
    readonly range: ClosedFloatingPointRange<number>;
    readonly suffix: string;
    register(offeredValueGroup: ValueGroup): RangedValue<Object>;
}