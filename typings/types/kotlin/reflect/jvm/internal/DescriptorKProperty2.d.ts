import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KProperty2 } from '../../../../kotlin/reflect/KProperty2.d.ts'
import type { DescriptorKProperty } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKProperty2$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty2$Getter.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKProperty2<D extends unknown, E extends unknown, V extends unknown> extends DescriptorKProperty<V> implements KProperty2<D, E, V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _getter: Lazy<DescriptorKProperty2$Getter<D, E, V>>;
    // private delegateSource: Lazy<Member>;
    readonly getter: DescriptorKProperty2$Getter<D, E, V>;
    get(receiver1: D, receiver2: E): V;
    getDelegate(receiver1: D, receiver2: E): Object | null;
    invoke(receiver1: D, receiver2: E): V;
}