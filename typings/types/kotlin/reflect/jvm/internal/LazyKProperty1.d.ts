import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty1 } from '../../../../kotlin/reflect/KProperty1.d.ts'
import type { KProperty1$Getter } from '../../../../kotlin/reflect/KProperty1$Getter.d.ts'
import type { LazyKProperty } from '../../../../kotlin/reflect/jvm/internal/LazyKProperty.d.ts'
export class LazyKProperty1<T extends unknown, V extends unknown, D extends KProperty1<T, V>> extends LazyKProperty<V, D> implements KProperty1<T, V> {
    constructor(name: string, computeProperty: () => D)
    readonly getter: KProperty1$Getter<T, V>;
    readonly name: string;
    get(receiver: T): V;
    getDelegate(receiver: T): Object | null;
    invoke(receiver: T): V;
}