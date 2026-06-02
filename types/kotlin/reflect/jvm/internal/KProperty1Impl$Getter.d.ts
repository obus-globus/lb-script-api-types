import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty1$Getter } from '../../../../kotlin/reflect/KProperty1$Getter.d.ts'
import type { KProperty1Impl } from '../../../../kotlin/reflect/jvm/internal/KProperty1Impl.d.ts'
import type { KPropertyImpl$Getter } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Getter.d.ts'
export class KProperty1Impl$Getter<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends KPropertyImpl$Getter<V> implements KProperty1$Getter<T, V> {
    constructor(property: KProperty1Impl<T, V>)
    readonly property: KProperty1Impl<T, V>;
    invoke(receiver: T): V;
}