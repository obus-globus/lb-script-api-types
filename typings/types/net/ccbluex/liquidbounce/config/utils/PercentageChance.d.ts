import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { RandomGenerator } from '../../../../../java/util/random/RandomGenerator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { ReadOnlyProperty } from '../../../../../kotlin/properties/ReadOnlyProperty.d.ts'
import type { KProperty } from '../../../../../kotlin/reflect/KProperty.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
export class PercentageChance<T extends Number> extends Object implements BooleanSupplier, ReadOnlyProperty<Object, boolean> {
    constructor(value: Value<T>, randomGetter: () => RandomGenerator)
    /*not mapped: */ isEnabled(): boolean;
    readonly percentage: number;
    // private randomGetter: () => RandomGenerator;
    // private value: Value<T>;
    getAsBoolean(): boolean;
    getValue(thisRef: Object | null, property: KProperty<Object>): boolean;
}