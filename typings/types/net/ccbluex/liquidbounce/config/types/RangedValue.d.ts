import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReadOnlyProperty } from '../../../../../kotlin/properties/ReadOnlyProperty.d.ts'
import type { ClosedRange } from '../../../../../kotlin/ranges/ClosedRange.d.ts'
import type { RangedValue$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue$Companion.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueType } from '../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
/**
 * Ranged value adds support for closed ranges
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/types/RangedValue.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/RangedValue.kt:26}
 */
export class RangedValue<T extends Object | number | string | boolean> extends Value<T> {
    static Companion: RangedValue$Companion;
    static squared(paramarg0: RangedValue<Object>): ReadOnlyProperty<Object, Object>;
    constructor(name: string, aliases: string[], defaultValue: T, range: ClosedRange<Object>, suffix: string, valueType: ValueType)
    readonly range: ClosedRange<Object>;
    readonly suffix: string;
    setByString(string: string): void;
}