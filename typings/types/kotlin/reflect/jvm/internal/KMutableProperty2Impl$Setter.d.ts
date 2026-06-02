import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty2$Setter } from '../../../../kotlin/reflect/KMutableProperty2$Setter.d.ts'
import type { KMutableProperty2Impl } from '../../../../kotlin/reflect/jvm/internal/KMutableProperty2Impl.d.ts'
import type { KPropertyImpl$Setter } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Setter.d.ts'
export class KMutableProperty2Impl$Setter<D extends Object | number | string | boolean, E extends Object | number | string | boolean, V extends Object | number | string | boolean> extends KPropertyImpl$Setter<V> implements KMutableProperty2$Setter<D, E, V> {
    constructor(property: KMutableProperty2Impl<D, E, V>)
    readonly property: KMutableProperty2Impl<D, E, V>;
    invoke(receiver1: D, receiver2: E, value: V): void;
}