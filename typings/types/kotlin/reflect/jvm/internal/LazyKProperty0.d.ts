import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty0 } from '../../../../kotlin/reflect/KProperty0.d.ts'
import type { KProperty0$Getter } from '../../../../kotlin/reflect/KProperty0$Getter.d.ts'
import type { LazyKProperty } from '../../../../kotlin/reflect/jvm/internal/LazyKProperty.d.ts'
export class LazyKProperty0<V extends unknown, D extends KProperty0<V>> extends LazyKProperty<V, D> implements KProperty0<V> {
    constructor(name: string, computeProperty: () => D)
    readonly getter: KProperty0$Getter<V>;
    readonly name: string;
    get(): V;
    getDelegate(): Object | null;
    invoke(): V;
}