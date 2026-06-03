import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
import type { KProperty1$Getter } from '../../kotlin/reflect/KProperty1$Getter.d.ts'
export interface KProperty1<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object, (param0: T) => V, KProperty<V>{
    readonly getter: KProperty1$Getter<T, V>;
    get(receiver: T): V;
    getDelegate(receiver: T): Object | null;
}