import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { RangedValueProvider } from '../../../../../net/ccbluex/liquidbounce/utils/client/RangedValueProvider.d.ts'
/**
 * {@link ValueGroup.float} registered to the submodule directly.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RangedValueProvider.kt:60}
 */
export class FloatValueProvider extends Object implements RangedValueProvider {
    constructor(name: string, default_: number, range: ClosedFloatingPointRange<number>, suffix: string)
    readonly default: number;
    readonly name: string;
    readonly range: ClosedFloatingPointRange<number>;
    readonly suffix: string;
    register(offeredValueGroup: ValueGroup): RangedValue<Object>;
}