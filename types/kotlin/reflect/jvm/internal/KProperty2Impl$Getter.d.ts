import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty2$Getter } from '../../../../kotlin/reflect/KProperty2$Getter.d.ts'
import type { KProperty2Impl } from '../../../../kotlin/reflect/jvm/internal/KProperty2Impl.d.ts'
import type { KPropertyImpl$Getter } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Getter.d.ts'
export class KProperty2Impl$Getter<D extends Object | number | string | boolean, E extends Object | number | string | boolean, V extends Object | number | string | boolean> extends KPropertyImpl$Getter<V> implements KProperty2$Getter<D, E, V> {
    constructor(property: KProperty2Impl<D, E, V>)
    readonly property: KProperty2Impl<D, E, V>;
    invoke(receiver1: D, receiver2: E): V;
}