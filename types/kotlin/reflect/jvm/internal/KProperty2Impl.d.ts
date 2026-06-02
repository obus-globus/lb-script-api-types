import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KProperty2 } from '../../../../kotlin/reflect/KProperty2.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KProperty2Impl$Getter } from '../../../../kotlin/reflect/jvm/internal/KProperty2Impl$Getter.d.ts'
import type { KPropertyImpl } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl.d.ts'
import type { KPropertyImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Companion.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class KProperty2Impl<D extends Object | number | string | boolean, E extends Object | number | string | boolean, V extends Object | number | string | boolean> extends KPropertyImpl<V> implements KProperty2<D, E, V> {
    static Companion: KPropertyImpl$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _getter: Lazy<KProperty2Impl$Getter<D, E, V>>;
    // private delegateSource: Lazy<Member>;
    readonly getter: KProperty2Impl$Getter<D, E, V>;
    get(receiver1: D, receiver2: E): V;
    getDelegate(receiver1: D, receiver2: E): Object | null;
    invoke(receiver1: D, receiver2: E): V;
}