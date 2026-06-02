import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
export interface PropertyDelegateProvider<T extends Object | number | string | boolean, D extends Object | number | string | boolean> extends Object{
    provideDelegate(thisRef: T, property: KProperty<Object>): D;
}