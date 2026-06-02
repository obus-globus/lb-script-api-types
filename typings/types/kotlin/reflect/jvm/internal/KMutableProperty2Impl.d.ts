import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty2 } from '../../../../kotlin/reflect/KMutableProperty2.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KMutableProperty2Impl$Setter } from '../../../../kotlin/reflect/jvm/internal/KMutableProperty2Impl$Setter.d.ts'
import type { KProperty2Impl } from '../../../../kotlin/reflect/jvm/internal/KProperty2Impl.d.ts'
import type { KPropertyImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Companion.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class KMutableProperty2Impl<D extends Object | number | string | boolean, E extends Object | number | string | boolean, V extends Object | number | string | boolean> extends KProperty2Impl<D, E, V> implements KMutableProperty2<D, E, V> {
    static Companion: KPropertyImpl$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _setter: Lazy<KMutableProperty2Impl$Setter<D, E, V>>;
    readonly setter: KMutableProperty2Impl$Setter<D, E, V>;
    set(receiver1: D, receiver2: E, value: V): void;
}