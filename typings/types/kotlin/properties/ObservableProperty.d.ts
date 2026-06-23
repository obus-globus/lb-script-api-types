import type { Object } from '../../java/lang/Object.d.ts'
import type { ReadWriteProperty } from '../../kotlin/properties/ReadWriteProperty.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export abstract class ObservableProperty<V extends unknown> extends Object implements ReadWriteProperty<Object, V> {
    constructor(initialValue: V)
    // private value: V;
    protected afterChange(property: KProperty<Object>, oldValue: V, newValue: V): void;
    protected beforeChange(property: KProperty<Object>, oldValue: V, newValue: V): boolean;
    getValue(thisRef: Object | null, property: KProperty<Object>): V;
    setValue(thisRef: Object | null, property: KProperty<Object>, value: V): void;
    toString(): string;
}