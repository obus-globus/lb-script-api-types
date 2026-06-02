import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty1$Setter } from '../../../../kotlin/reflect/KMutableProperty1$Setter.d.ts'
import type { KMutableProperty1Impl } from '../../../../kotlin/reflect/jvm/internal/KMutableProperty1Impl.d.ts'
import type { KPropertyImpl$Setter } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Setter.d.ts'
export class KMutableProperty1Impl$Setter<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends KPropertyImpl$Setter<V> implements KMutableProperty1$Setter<T, V> {
    constructor(property: KMutableProperty1Impl<T, V>)
    readonly property: KMutableProperty1Impl<T, V>;
    invoke(receiver: T, value: V): void;
}