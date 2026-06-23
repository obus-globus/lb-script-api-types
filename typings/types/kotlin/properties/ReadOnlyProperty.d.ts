import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export interface ReadOnlyProperty<T extends unknown, V extends unknown> extends Object{
    getValue(thisRef: T, property: KProperty<Object>): V;
}