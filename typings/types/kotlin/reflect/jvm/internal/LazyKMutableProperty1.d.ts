import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty1 } from '../../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { KMutableProperty1$Setter } from '../../../../kotlin/reflect/KMutableProperty1$Setter.d.ts'
import type { LazyKProperty1 } from '../../../../kotlin/reflect/jvm/internal/LazyKProperty1.d.ts'
export class LazyKMutableProperty1<T extends unknown, V extends unknown, D extends KMutableProperty1<T, V>> extends LazyKProperty1<T, V, D> implements KMutableProperty1<T, V> {
    constructor(name: string, computeProperty: () => D)
    readonly setter: KMutableProperty1$Setter<T, V>;
    set(receiver: T, value: V): void;
}