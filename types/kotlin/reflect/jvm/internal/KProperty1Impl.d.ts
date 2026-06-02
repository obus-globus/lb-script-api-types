import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KProperty1 } from '../../../../kotlin/reflect/KProperty1.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KProperty1Impl$Getter } from '../../../../kotlin/reflect/jvm/internal/KProperty1Impl$Getter.d.ts'
import type { KPropertyImpl } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl.d.ts'
import type { KPropertyImpl$Companion } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Companion.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class KProperty1Impl<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends KPropertyImpl<V> implements KProperty1<T, V> {
    static Companion: KPropertyImpl$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _getter: Lazy<KProperty1Impl$Getter<T, V>>;
    // private delegateSource: Lazy<Member>;
    readonly getter: KProperty1Impl$Getter<T, V>;
    get(receiver: T): V;
    getDelegate(receiver: T): Object | null;
    invoke(receiver: T): V;
}