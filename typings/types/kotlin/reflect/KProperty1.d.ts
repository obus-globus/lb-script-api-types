import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
import type { KProperty1$Getter } from '../../kotlin/reflect/KProperty1$Getter.d.ts'
export interface KProperty1<T extends unknown, V extends unknown> extends Object, KProperty<V> {
    readonly getter: KProperty1$Getter<T, V>;
    get(receiver: T): V;
    getDelegate(receiver: T): Object | null;
}