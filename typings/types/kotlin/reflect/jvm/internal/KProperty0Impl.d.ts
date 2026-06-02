import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KProperty0 } from '../../../../kotlin/reflect/KProperty0.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KProperty0Impl$Getter } from '../../../../kotlin/reflect/jvm/internal/KProperty0Impl$Getter.d.ts'
import type { KPropertyImpl } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl.d.ts'
import type { KPropertyImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Companion.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class KProperty0Impl<V extends Object | number | string | boolean> extends KPropertyImpl<V> implements KProperty0<V> {
    static Companion: KPropertyImpl$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _getter: Lazy<KProperty0Impl$Getter<V>>;
    // private delegateValue: Lazy<Object>;
    readonly getter: KProperty0Impl$Getter<V>;
    get(): V;
    getDelegate(): Object | null;
    invoke(): V;
}