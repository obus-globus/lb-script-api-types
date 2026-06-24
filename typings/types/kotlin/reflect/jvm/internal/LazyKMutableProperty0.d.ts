import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty0 } from '../../../../kotlin/reflect/KMutableProperty0.d.ts'
import type { KMutableProperty0$Setter } from '../../../../kotlin/reflect/KMutableProperty0$Setter.d.ts'
import type { LazyKProperty0 } from '../../../../kotlin/reflect/jvm/internal/LazyKProperty0.d.ts'
export class LazyKMutableProperty0<V extends unknown, D extends KMutableProperty0<V>> extends LazyKProperty0<V, D> implements KMutableProperty0<V> {
    constructor(name: string, computeProperty: () => D)
    readonly setter: KMutableProperty0$Setter<V>;
    set(value: V): void;
}