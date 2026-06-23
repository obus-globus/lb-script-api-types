import type { Object } from '../../java/lang/Object.d.ts'
import type { KProperty } from '../../kotlin/reflect/KProperty.d.ts'
import type { KProperty2$Getter } from '../../kotlin/reflect/KProperty2$Getter.d.ts'
export interface KProperty2<D extends unknown, E extends unknown, V extends unknown> extends Object, KProperty<V> {
    readonly getter: KProperty2$Getter<D, E, V>;
    get(receiver1: D, receiver2: E): V;
    getDelegate(receiver1: D, receiver2: E): Object | null;
}