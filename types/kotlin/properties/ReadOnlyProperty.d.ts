import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export interface ReadOnlyProperty<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    getValue(thisRef: T, property: KProperty<Object>): V;
}