import type { Object } from '../../java/lang/Object.d.ts'
import type { ReadOnlyProperty } from '../../kotlin/properties/ReadOnlyProperty.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export interface ReadWriteProperty<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object, ReadOnlyProperty<T, V>{
    getValue(thisRef: T, property: KProperty<Object>): V;
    setValue(thisRef: T, property: KProperty<Object>, value: V): void;
}