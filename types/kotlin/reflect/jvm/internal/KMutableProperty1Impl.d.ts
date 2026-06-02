import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty1 } from '../../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KMutableProperty1Impl$Setter } from '../../../../kotlin/reflect/jvm/internal/KMutableProperty1Impl$Setter.d.ts'
import type { KProperty1Impl } from '../../../../kotlin/reflect/jvm/internal/KProperty1Impl.d.ts'
import type { KPropertyImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Companion.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class KMutableProperty1Impl<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends KProperty1Impl<T, V> implements KMutableProperty1<T, V> {
    static Companion: KPropertyImpl$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _setter: Lazy<KMutableProperty1Impl$Setter<T, V>>;
    readonly setter: KMutableProperty1Impl$Setter<T, V>;
    set(receiver: T, value: V): void;
}