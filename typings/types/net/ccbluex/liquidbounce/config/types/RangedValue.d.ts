import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReadOnlyProperty } from '../../../../../kotlin/properties/ReadOnlyProperty.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ClosedRange } from '../../../../../kotlin/ranges/ClosedRange.d.ts'
import type { RangedValue$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue$Companion.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueType } from '../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
export class RangedValue<T extends unknown> extends Value<T> {
    static Companion: RangedValue$Companion;
    static squared(self: RangedValue<ClosedFloatingPointRange<number>>): ReadOnlyProperty<Object, ClosedFloatingPointRange<number>>;
    constructor(name: string, aliases: string[], defaultValue: T, range: ClosedRange<any>, suffix: string, valueType: ValueType)
    readonly range: ClosedRange<any>;
    readonly suffix: string;
    setByString(string: string): void;
}