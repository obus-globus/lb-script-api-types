import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty0 } from '../../../../kotlin/reflect/KMutableProperty0.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KMutableProperty0Impl$Setter } from '../../../../kotlin/reflect/jvm/internal/KMutableProperty0Impl$Setter.d.ts'
import type { KProperty0Impl } from '../../../../kotlin/reflect/jvm/internal/KProperty0Impl.d.ts'
import type { KPropertyImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Companion.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class KMutableProperty0Impl<V extends Object | number | string | boolean> extends KProperty0Impl<V> implements KMutableProperty0<V> {
    static Companion: KPropertyImpl$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _setter: Lazy<KMutableProperty0Impl$Setter<V>>;
    readonly setter: KMutableProperty0Impl$Setter<V>;
    set(value: V): void;
}