import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ReadOnlyProperty } from '../../../../../../kotlin/properties/ReadOnlyProperty.d.ts'
import type { KProperty } from '../../../../../../kotlin/reflect/KProperty.d.ts'
import type { AbstractArrayMapOwner$AbstractArrayMapAccessor } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/AbstractArrayMapOwner$AbstractArrayMapAccessor.d.ts'
export class NullableArrayMapAccessor<K extends Object | number | string | boolean, V extends Object | number | string | boolean, T extends V> extends AbstractArrayMapOwner$AbstractArrayMapAccessor<K, V, T> implements ReadOnlyProperty<V[], V> {
    constructor(arg0: number)
    getValue(arg0: V[], arg1: KProperty<Object>): T;
}